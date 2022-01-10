//This file is automatically rebuilt by the Cesium build process.
export default "void customShaderStage(inout czm_modelVertexOutput vsOutput, inout ProcessedAttributes attributes)\n\
{\n\
    // VertexInput and initializeInputStruct() are dynamically generated in JS, \n\
    // see CustomShaderPipelineStage.js\n\
    VertexInput vsInput;\n\
    initializeInputStruct(vsInput, attributes);\n\
    vertexMain(vsInput, vsOutput);\n\
    attributes.positionMC = vsOutput.positionMC;\n\
}\n\
";
