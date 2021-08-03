#FROM ekidd/rust-musl-builder as build
FROM debian:bullseye as build
RUN apt-get update && \
    export DEBIAN_FRONTEND=noninteractive && \
    apt-get install -yq \
        build-essential \
        cmake \
        curl \
        file \
        git \
        libssl-dev \
        linux-libc-dev \
        musl-dev \
        musl-tools \
        pkgconf \
        python3 \
        sudo \
        xutils-dev \
        && \
    apt-get clean && rm -rf /var/lib/apt/lists/* && \
    useradd rust --user-group --create-home --shell /bin/bash --groups sudo && \
    echo "%sudo   ALL=(ALL:ALL) NOPASSWD:ALL" >/etc/sudoers.d/nopasswd
USER rust
ENV PATH=/home/rust/.cargo/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y --default-toolchain 1.51 --profile default --no-modify-path && \
    rustup target add x86_64-unknown-linux-musl && \
    rustup update
COPY --chown=rust:rust . /home/rust/src
WORKDIR /home/rust/src
RUN cargo build --release --locked --features cranelift --manifest-path lib/cli/Cargo.toml --target x86_64-unknown-linux-musl

FROM scratch
ENV TMPDIR=/
COPY --from=build /home/rust/src/target/x86_64-unknown-linux-musl/release/wasmer /wasmer
ENTRYPOINT ["/wasmer", "binfmt", "/binfmt_misc/", "reregister"]
