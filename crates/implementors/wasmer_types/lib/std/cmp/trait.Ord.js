(function() {var implementors = {};
implementors["wasmer_types"] = [{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.LocalFunctionIndex.html\" title=\"struct wasmer_types::indexes::LocalFunctionIndex\">LocalFunctionIndex</a>","synthetic":false,"types":["wasmer_types::indexes::LocalFunctionIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.ArchivedLocalFunctionIndex.html\" title=\"struct wasmer_types::indexes::ArchivedLocalFunctionIndex\">ArchivedLocalFunctionIndex</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>: Archive,&nbsp;</span>","synthetic":false,"types":["wasmer_types::indexes::ArchivedLocalFunctionIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.LocalTableIndex.html\" title=\"struct wasmer_types::indexes::LocalTableIndex\">LocalTableIndex</a>","synthetic":false,"types":["wasmer_types::indexes::LocalTableIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.LocalMemoryIndex.html\" title=\"struct wasmer_types::indexes::LocalMemoryIndex\">LocalMemoryIndex</a>","synthetic":false,"types":["wasmer_types::indexes::LocalMemoryIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.LocalGlobalIndex.html\" title=\"struct wasmer_types::indexes::LocalGlobalIndex\">LocalGlobalIndex</a>","synthetic":false,"types":["wasmer_types::indexes::LocalGlobalIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.ArchivedLocalGlobalIndex.html\" title=\"struct wasmer_types::indexes::ArchivedLocalGlobalIndex\">ArchivedLocalGlobalIndex</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>: Archive,&nbsp;</span>","synthetic":false,"types":["wasmer_types::indexes::ArchivedLocalGlobalIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.FunctionIndex.html\" title=\"struct wasmer_types::indexes::FunctionIndex\">FunctionIndex</a>","synthetic":false,"types":["wasmer_types::indexes::FunctionIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.ArchivedFunctionIndex.html\" title=\"struct wasmer_types::indexes::ArchivedFunctionIndex\">ArchivedFunctionIndex</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>: Archive,&nbsp;</span>","synthetic":false,"types":["wasmer_types::indexes::ArchivedFunctionIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.TableIndex.html\" title=\"struct wasmer_types::indexes::TableIndex\">TableIndex</a>","synthetic":false,"types":["wasmer_types::indexes::TableIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.ArchivedTableIndex.html\" title=\"struct wasmer_types::indexes::ArchivedTableIndex\">ArchivedTableIndex</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>: Archive,&nbsp;</span>","synthetic":false,"types":["wasmer_types::indexes::ArchivedTableIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.GlobalIndex.html\" title=\"struct wasmer_types::indexes::GlobalIndex\">GlobalIndex</a>","synthetic":false,"types":["wasmer_types::indexes::GlobalIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.ArchivedGlobalIndex.html\" title=\"struct wasmer_types::indexes::ArchivedGlobalIndex\">ArchivedGlobalIndex</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>: Archive,&nbsp;</span>","synthetic":false,"types":["wasmer_types::indexes::ArchivedGlobalIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.MemoryIndex.html\" title=\"struct wasmer_types::indexes::MemoryIndex\">MemoryIndex</a>","synthetic":false,"types":["wasmer_types::indexes::MemoryIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.ArchivedMemoryIndex.html\" title=\"struct wasmer_types::indexes::ArchivedMemoryIndex\">ArchivedMemoryIndex</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>: Archive,&nbsp;</span>","synthetic":false,"types":["wasmer_types::indexes::ArchivedMemoryIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.SignatureIndex.html\" title=\"struct wasmer_types::indexes::SignatureIndex\">SignatureIndex</a>","synthetic":false,"types":["wasmer_types::indexes::SignatureIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.ArchivedSignatureIndex.html\" title=\"struct wasmer_types::indexes::ArchivedSignatureIndex\">ArchivedSignatureIndex</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>: Archive,&nbsp;</span>","synthetic":false,"types":["wasmer_types::indexes::ArchivedSignatureIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.DataIndex.html\" title=\"struct wasmer_types::indexes::DataIndex\">DataIndex</a>","synthetic":false,"types":["wasmer_types::indexes::DataIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.ArchivedDataIndex.html\" title=\"struct wasmer_types::indexes::ArchivedDataIndex\">ArchivedDataIndex</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>: Archive,&nbsp;</span>","synthetic":false,"types":["wasmer_types::indexes::ArchivedDataIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.ElemIndex.html\" title=\"struct wasmer_types::indexes::ElemIndex\">ElemIndex</a>","synthetic":false,"types":["wasmer_types::indexes::ElemIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.ArchivedElemIndex.html\" title=\"struct wasmer_types::indexes::ArchivedElemIndex\">ArchivedElemIndex</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>: Archive,&nbsp;</span>","synthetic":false,"types":["wasmer_types::indexes::ArchivedElemIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.CustomSectionIndex.html\" title=\"struct wasmer_types::indexes::CustomSectionIndex\">CustomSectionIndex</a>","synthetic":false,"types":["wasmer_types::indexes::CustomSectionIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/indexes/struct.ArchivedCustomSectionIndex.html\" title=\"struct wasmer_types::indexes::ArchivedCustomSectionIndex\">ArchivedCustomSectionIndex</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>: Archive,&nbsp;</span>","synthetic":false,"types":["wasmer_types::indexes::ArchivedCustomSectionIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"wasmer_types/indexes/enum.ExportIndex.html\" title=\"enum wasmer_types::indexes::ExportIndex\">ExportIndex</a>","synthetic":false,"types":["wasmer_types::indexes::ExportIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"wasmer_types/indexes/enum.ArchivedExportIndex.html\" title=\"enum wasmer_types::indexes::ArchivedExportIndex\">ArchivedExportIndex</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"wasmer_types/indexes/struct.FunctionIndex.html\" title=\"struct wasmer_types::indexes::FunctionIndex\">FunctionIndex</a>: Archive,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"wasmer_types/indexes/struct.TableIndex.html\" title=\"struct wasmer_types::indexes::TableIndex\">TableIndex</a>: Archive,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"wasmer_types/indexes/struct.MemoryIndex.html\" title=\"struct wasmer_types::indexes::MemoryIndex\">MemoryIndex</a>: Archive,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"wasmer_types/indexes/struct.GlobalIndex.html\" title=\"struct wasmer_types::indexes::GlobalIndex\">GlobalIndex</a>: Archive,&nbsp;</span>","synthetic":false,"types":["wasmer_types::indexes::ArchivedExportIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"wasmer_types/indexes/enum.ImportIndex.html\" title=\"enum wasmer_types::indexes::ImportIndex\">ImportIndex</a>","synthetic":false,"types":["wasmer_types::indexes::ImportIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"enum\" href=\"wasmer_types/indexes/enum.ArchivedImportIndex.html\" title=\"enum wasmer_types::indexes::ArchivedImportIndex\">ArchivedImportIndex</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"wasmer_types/indexes/struct.FunctionIndex.html\" title=\"struct wasmer_types::indexes::FunctionIndex\">FunctionIndex</a>: Archive,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"wasmer_types/indexes/struct.TableIndex.html\" title=\"struct wasmer_types::indexes::TableIndex\">TableIndex</a>: Archive,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"wasmer_types/indexes/struct.MemoryIndex.html\" title=\"struct wasmer_types::indexes::MemoryIndex\">MemoryIndex</a>: Archive,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"wasmer_types/indexes/struct.GlobalIndex.html\" title=\"struct wasmer_types::indexes::GlobalIndex\">GlobalIndex</a>: Archive,&nbsp;</span>","synthetic":false,"types":["wasmer_types::indexes::ArchivedImportIndex"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/units/struct.Pages.html\" title=\"struct wasmer_types::units::Pages\">Pages</a>","synthetic":false,"types":["wasmer_types::units::Pages"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/units/struct.Bytes.html\" title=\"struct wasmer_types::units::Bytes\">Bytes</a>","synthetic":false,"types":["wasmer_types::units::Bytes"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"wasmer_types/entity/packed_option/trait.ReservedValue.html\" title=\"trait wasmer_types::entity::packed_option::ReservedValue\">ReservedValue</a>&gt; <a class=\"trait\" href=\"wasmer_types/lib/std/cmp/trait.Ord.html\" title=\"trait wasmer_types::lib::std::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"wasmer_types/entity/packed_option/struct.PackedOption.html\" title=\"struct wasmer_types::entity::packed_option::PackedOption\">PackedOption</a>&lt;T&gt;","synthetic":false,"types":["wasmer_types::entity::packed_option::PackedOption"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()