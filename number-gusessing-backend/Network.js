class Network{
    constructor(inputSize,outputSize,innerLayersSize=16,innerLayersCount=6){
        if(innerLayersCount<1) throw new Error("The parameter innerLayersCount must be at least 1") ;
        this.weights = [];
        this.neurons =[];
        this.biases = [];
        initNetwork(inputSize,outputSize,innerLayersSize);
    }
    initNetwork(inputSize,outputSize,innerLayersSize){
        let layerWeights = [];
        for(let i =0;i<inputSize;i++){
            let neuronWeights =[];
            for(let i =0;i<innerLayersSize;i++){
                neuronWeights.push(Math.random());
            }
            layerWeights.push(neuronWeights);
        }
        weights.push(layerWeights);
        for(let i =0;i<innerLayersCount-1;i++){
            layerWeights = []
            for(let j =0;j<innerLayersSize;j++){
                let neuronWeights =[];
                for(let i =0;i<innerLayersSize;i++){
                    neuronWeights.push(Math.random());
                }
                layerWeights.push(neuronWeights);
            }
            weights.push(layerWeights);
        }   
        for(let i =0;i<inputSize;i++){
            
        }
    }
    
}