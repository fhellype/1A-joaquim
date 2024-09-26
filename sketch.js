// velozes e furiosos
// guardiões da galáxia
// as aventuras de pi
// paddington
// stranger things

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}// a viagem de chihiro, LIVRE
// guardiões da galáxia, 12
// as aventuras de pi, 10
// paddington, LIVRE
// ladrões de bicicleta, 12// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantasia, aventura
// paddington, LIVRE, fantasia, aventura
// as aventuras de pi, 10, drama, fantasia, aventura
// depois da chuva, 10, drama
// guardiões da galáxia, 12, fantasia, aventura
// ladrões de bicicleta, 12, drama
// o menino que descobriu o vento, 14, dramaidade >= 14let n = 1;
function draw() {
    background(220);
    let recomendacao = "A viagem de Chihiro";
    text(recomendacao, width/2, height/2);
}function draw() {
    background(220);
    let recomendacao = geraRecomendacao();
    text(recomendacao, width/2, height/2);
}

function geraRecomendacao() {
  return "A viagem de Chihiro";
}function draw() {
    background(220);
    let recomendacao = geraRecomendacao();
    text(recomendacao, width/2, height/2);
}

function geraRecomendacao() {
  return "A viagem de Chihiro";
}function geraRecomendacao(idade) {
    if (idade >= 10) {
        return "stranger things";
    } else {
        return "A viagem de Chihiro";
    }
}function draw() {
    background(220);
    let idade = 15; // exemplo de idade
    let recomendacao = geraRecomendacao(idade);
    text(recomendacao, width/2, height/2);
}function draw() {
    background(220);
    let idade = 15; // exemplo de idade
    let recomendacao = geraRecomendacao(idade);
    text(recomendacao, width/2, height/2);
}let campoIdade;

function setup() {
    createCanvas(400, 400);
    campoIdade = createInput("15");
}function draw() {
    background(220);
    let idade = campoIdade.value();
    let recomendacao = geraRecomendacao(idade);
    text(recomendacao, width/2, height/2);
}function geraRecomendacao(idade) {
    if (idade >= 10) {
        if (idade >= 14) {
            return "stranger things";
        } else {
            return "As aventuras de Pi";
        }
    } else {
        return "stranger things ";
    }function geraRecomendacao(idade) {
    if (idade >= 10) {
        if (idade >= 14) {
            return "O menino que descobriu o vento";
        } else {
            return "As aventuras de Pi";
        }
    } else {
        return "A viagem de Chihiro";
    }let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("15");
}

function draw() {
  background(220);
  let idade = 15; // exemplo de idade
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      return "As aventuras de Pi";
    }
  } else {
    return "A viagem de Chihiro";
  }
}
}
}