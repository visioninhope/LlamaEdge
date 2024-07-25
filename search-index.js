var searchIndex = new Map(JSON.parse('[\
["llama_core",{"t":"PPPFEFFFPGNONNNNNNNNNNNOCNNNNNNNNNNONCNNOOONNNNNNNNNNNNNNNNNNNCONNNNNNNNNNCNNNNNNNNONNNNNNNHONNNNNHHNNNNNOOOOOOCOONNNNONOCOOHNNONNNNNONNNNNNNNNNNNNNNNOCNNNNNNNNNNNNNNNNNNNNHHHHHHPGPPPPPPGPPNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNHHHHHHHH","n":["Chat","ChatEmbedding","Embeddings","Graph","LlamaCoreError","Metadata","MetadataBuilder","PluginInfo","Rag","RunningMode","alias","batch_size","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","build","build_number","chat","clone","clone","clone","clone_into","clone_into","clone_into","clone_to_uninit","clone_to_uninit","clone_to_uninit","cmp","commit_id","compare","completions","compute","compute_single","created","ctx_size","debug_log","default","deref","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deserialize","disable_mmap","do_erased_serialize","drop","drop","drop","drop","drop","embeddings","embeddings","enable_debug_log","enable_embeddings","enable_plugin_log","enable_prompts_log","eq","equivalent","equivalent","equivalent","equivalent","erased_serialize","error","finish_single","fmt","fmt","fmt","fmt","fmt","fmt","fmt","frequency_penalty","from","from","from","from","from","get_output","get_output_single","get_plugin_info","image","init","init","init","init","init","init_core_context","init_rag_core_context","into","into","into","into","into","log_enable","log_prompts","metadata","mmproj","model_alias","model_name","models","n_gpu_layers","n_predict","name","new","new","partial_cmp","presence_penalty","prompt_template","prompt_template","rag","repeat_penalty","reverse_prompt","running_mode","serialize","set_input","temperature","to_owned","to_owned","to_owned","to_string","to_string","top_p","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","update_metadata","use_mmap","utils","vzip","vzip","vzip","vzip","vzip","with_batch_size","with_ctx_size","with_frequency_penalty","with_image","with_mmproj","with_model_alias","with_model_name","with_n_gpu_layers","with_n_predict","with_presence_penalty","with_prompt_template","with_repeat_penalty","with_reverse_prompt","with_temperature","with_top_p","chat","chat_completions","chat_completions_stream","completions","dimension","embeddings","Backend","BackendError","Compute","ComputeSingle","FinishSingle","GetOutput","GetOutputSingle","InitContext","LlamaCoreError","Operation","SetInput","borrow","borrow","borrow_mut","borrow_mut","deref","deref","deref_mut","deref_mut","drop","drop","fmt","fmt","fmt","fmt","from","from","from","init","init","into","into","source","to_string","to_string","try_from","try_from","try_into","try_into","type_id","type_id","vzip","vzip","models","chunk_text","rag_doc_chunks_to_embeddings","rag_query_to_embeddings","rag_retrieve_context","chat_model_names","chat_prompt_template","embedding_model_names"],"q":[[0,"llama_core"],[172,"llama_core::chat"],[175,"llama_core::completions"],[176,"llama_core::embeddings"],[178,"llama_core::error"],[221,"llama_core::models"],[222,"llama_core::rag"],[226,"llama_core::utils"],[229,"core::cmp"],[230,"wasmedge_wasi_nn::error"],[231,"core::result"],[232,"serde::de"],[233,"core::option"],[234,"erased_serde::ser"],[235,"erased_serde::error"],[236,"core::fmt"],[237,"core::marker"],[238,"chat_prompts"],[239,"alloc::string"],[240,"core::convert"],[241,"serde::ser"],[242,"wasmedge_wasi_nn::tensor"],[243,"core::any"],[244,"endpoints::chat"],[245,"futures_core::stream"],[246,"either"],[247,"endpoints::completions"],[248,"endpoints::embeddings"],[249,"core::error"],[250,"endpoints::models"],[251,"alloc::vec"],[252,"endpoints::rag"]],"i":[8,8,8,0,0,0,0,0,8,0,1,6,6,5,1,7,8,6,5,1,7,8,5,7,0,6,7,8,6,7,8,6,7,8,8,7,8,0,1,1,1,6,6,6,6,5,1,7,8,6,5,1,7,8,6,5,6,6,5,1,7,8,0,6,5,5,5,5,8,8,8,8,8,6,0,1,6,5,1,7,7,8,8,6,6,5,1,7,8,1,1,0,6,6,5,1,7,8,0,0,6,5,1,7,8,6,6,1,6,6,6,0,6,6,1,5,1,8,6,1,6,0,6,6,0,6,1,6,6,7,8,7,8,6,6,5,1,7,8,6,5,1,7,8,6,5,1,7,8,1,6,0,6,5,1,7,8,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,0,24,0,44,44,44,44,44,24,0,24,44,24,44,24,44,24,44,24,44,24,44,24,24,44,44,24,24,44,24,44,24,44,24,24,44,24,44,24,44,24,44,24,44,0,0,0,0,0,0,0,0],"f":"``````````{{{d{b}}}{{d{f}}}}`{{{d{c}}}{{d{e}}}{}{}}0000{{{d{hc}}}{{d{he}}}{}{}}0000{jl}``{{{d{l}}}l}{{{d{n}}}n}{{{d{A`}}}A`}{{{d{c}}{d{he}}}Ab{}{}}00{{{d{c}}}Ab{}}00{{{d{A`}}{d{A`}}}Ad}`{{{d{c}}{d{e}}}Ad{}{}}`{{{d{hb}}}{{Ah{AbAf}}}}0```{{}l}{Aj{{d{c}}}{}}0000{Aj{{d{hc}}}{}}0000{c{{Ah{l}}}Al}{{j{B`{An}}}j}{{{d{c}}{d{hBb}}}{{Ah{AbBd}}}{}}{AjAb}0000``{{jAn}j}000{{{d{A`}}{d{A`}}}An}{{{d{c}}{d{e}}}An{}{}}000{{{d{c}}{d{hBb}}}{{Ah{AbBf}}}{}}`;{{{d{l}}{d{hBh}}}Bj}{{{d{j}}{d{hBh}}}Bj}{{{d{b}}{d{hBh}}}Bj}{{{d{n}}{d{hBh}}}Bj}0{{{d{A`}}{d{hBh}}}Bj}0`{cc{}}0000{{{d{b}}Aj{d{h{Bl{c}}}}}{{Ah{AjAf}}}Bn}0{{}{{Ah{nC`}}}}`{{}Aj}0000{{{B`{{d{{Bl{l}}}}}}{B`{{d{{Bl{l}}}}}}}{{Ah{AbC`}}}}{{{d{{Bl{l}}}}{d{{Bl{l}}}}}{{Ah{AbC`}}}}{ce{}{}}0000`````````{{{d{b}}}{{d{f}}}}{{ccCb}j{{Cf{Cd}}}}{{{d{l}}}{{Ah{bC`}}}}{{{d{A`}}{d{A`}}}{{B`{Ad}}}}`{{{d{b}}}Cb}````{{}{{Ah{A`C`}}}}{{{d{l}}c}AhCh}{{{d{hb}}AjCj{d{{Bl{Aj}}}}e}{{Ah{AbAf}}}Bn{{Cl{{Bl{c}}}}}}`{{{d{c}}}e{}{}}00{{{d{c}}}Cd{}}0`{c{{Ah{e}}}{}{}}000000000{{{d{c}}}Cn{}}0000{{{d{hb}}}{{Ah{AbC`}}}}``====={{jD`}j}0{{jDb}j}{{jc}j{{Cf{Cd}}}}{{j{B`{Cd}}}j}11332{{jCb}j}3133{{{d{hDd}}}{{Ah{{Dn{{`{{Dj{}{{Df{Cd}}{Dh{C`}}}}}}Dl}}C`}}}}{{{d{hDd}}}{{Ah{DlC`}}}}{{{d{hDd}}}{{Ah{{`{{Dj{}{{Df{Cd}}{Dh{C`}}}}}}C`}}}}{{{d{E`}}}{{Ah{EbC`}}}}{{{B`{{d{f}}}}}{{Ah{D`C`}}}}{{{d{Ed}}}{{Ah{EfC`}}}}```````````{{{d{c}}}{{d{e}}}{}{}}0{{{d{hc}}}{{d{he}}}{}{}}0{Aj{{d{c}}}{}}0{Aj{{d{hc}}}{}}0{AjAb}0{{{d{C`}}{d{hBh}}}Bj}0{{{d{Eh}}{d{hBh}}}Bj}0{cc{}}{EhC`}1{{}Aj}0{ce{}{}}0{{{d{C`}}}{{B`{{d{Ej}}}}}}{{{d{c}}}Cd{}}0{c{{Ah{e}}}{}{}}000{{{d{c}}}Cn{}}044{{}{{Ah{ElC`}}}}{{ceAj}{{Ah{{En{Cd}}C`}}}{{Cl{f}}}{{Cl{f}}}}{{{d{F`}}}{{Ah{EfC`}}}}0{{{d{{Bl{Fb}}}}ceAj{B`{Fb}}}{{Ah{FdC`}}}{{Cl{f}}}{{Cl{f}}}}{{}{{Ah{{En{Cd}}C`}}}}{{{B`{{d{f}}}}}{{Ah{CbC`}}}}1","D":"Hj","p":[[5,"Graph",0],[1,"reference"],[1,"str"],[0,"mut"],[5,"MetadataBuilder",0],[5,"Metadata",0],[5,"PluginInfo",0],[6,"RunningMode",0],[1,"unit"],[6,"Ordering",229],[6,"Error",230],[6,"Result",231],[1,"usize"],[10,"Deserializer",232],[1,"bool"],[6,"Option",233],[10,"Serializer",234],[6,"ErrorImpl",234],[5,"Error",235],[5,"Formatter",236],[8,"Result",236],[1,"slice"],[10,"Sized",237],[6,"LlamaCoreError",178],[6,"PromptTemplateType",238],[5,"String",239],[10,"Into",240],[10,"Serializer",241],[6,"TensorType",242],[10,"AsRef",240],[5,"TypeId",243],[1,"u64"],[1,"f64"],[5,"ChatCompletionRequest",244],[17,"Ok"],[17,"Error"],[10,"TryStream",245],[5,"ChatCompletionObject",244],[6,"Either",246],[5,"CompletionRequest",247],[5,"CompletionObject",247],[5,"EmbeddingRequest",248],[5,"EmbeddingsResponse",248],[6,"BackendError",178],[10,"Error",249],[5,"ListModelsResponse",250],[5,"Vec",251],[5,"RagEmbeddingRequest",252],[1,"f32"],[5,"RetrieveObject",252]],"r":[[4,178]],"b":[[79,"impl-Debug-for-PluginInfo"],[80,"impl-Display-for-PluginInfo"],[81,"impl-Debug-for-RunningMode"],[82,"impl-Display-for-RunningMode"],[199,"impl-Display-for-LlamaCoreError"],[200,"impl-Debug-for-LlamaCoreError"],[201,"impl-Debug-for-BackendError"],[202,"impl-Display-for-BackendError"]],"c":"OjAAAAEAAAAAAAEAEAAAAK4ArwA=","e":"OzAAAAEAAKAAGAABAAIABQAAAAkAAAAMAAwAGgALACkAFQBAAAoATQAHAF4ABABqAAIAbgABAHEAAQB0AAAAdgABAHkAAAB7AAEAfgAAAIAAFQCXAAAAmQATAL4ADQDNAAAAzwABANMACgA="}]\
]'));
if (typeof exports !== 'undefined') exports.searchIndex = searchIndex;
else if (window.initSearch) window.initSearch(searchIndex);
