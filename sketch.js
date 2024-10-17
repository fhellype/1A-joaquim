// velozes e furiosos 9 ação
// guardiões da galáxia ação, aventura, comédia e ficção científica 
// breaking bread
// karate kid
// stranger things  Ficção científica · terror · suspense · drama adolescente 
//carga maxima
// duelo no asfalo
// um luar silencioso,
// infiltrado, 10, drama
// guardiões da galáxia, 12, fantasia, aventura
// transformers, 12, drama
// os vingadores, 14, drama
// bad boys
// guardiões da galáxia
//grand turismo
// uma noite de crimes
// homem aranha de volta pra casa 

function setup() {
  createCanvas(400, 400);
}

function draw(idade) {
  background(220);
}let n = 1;
function draw() {
  background(220);
  if (n >=9){
    print(n);
  } else{
    print(n);
    n = n+2;
  }
}function draw() {
    background(220);
    let recomendacao = "carga maxima ";
    text(recomendacao, width/2, height/2);
}function draw() {
    background(220);
    let recomendacao = geraRecomendacao();
    text(recomendacao, width/2, height/2);
}

function geraRecomendacao() {
  return "A viagem de Chihiro";
}function geraRecomendacao(idade) {
    if (idade >= 11) {
        return "duelo no asfalto";
    } else {
        return "uma noite de crimes";
    }
}function draw() {
    background(220);
    let idade = 15; // exemplo de idade
    let recomendacao = geraRecomendacao();
    text(recomendacao, width/2, height/2);
}let campoIdade;function draw() {
    background(220);
    let idade = campoIdade.value();
    let recomendacao = geraRecomendacao(createInput);
    text(recomendacao, width/2, height/2);
}

function setup() {
    createCanvas(400, 400);
    campoIdade = createInput("5");
}function draw() {
    background(220);
    let idade = campoIdade.value();
    let recomendacao = geraRecomendacao(idade);
    text(recomendacao, width/2, height/2);
}function draw() {
    background(220);
    let idade = campoIdade.value();
    let recomendacao = geraRecomendacao(idade);
    text(recomendacao, width/2, height/2);
}function draw() {
    background(220);
    let idade = campoIdade.value();
    let recomendacao = geraRecomendacao(idade);
    text(recomendacao, width/2, height/2);
}function geraRecomendacao(idade) {
    if (idade >= 14) {
        if (idade >= 14) {
            return "stranger things";
        } else {
            return "guardioes da galaxia";
        }
    } else {
        return "A viagem de Chihiro";
    }
}function geraRecomendacao(idade) {
    if (idade >= 12) {
        if (idade >= 14) {
            return "Os vongadores";
        } else {
            return "As aventuras de Pi";
        }
    } else {
        return "A viagem de Chihiro";
    }
}function geraRecomendacao(idade, gostaDeFantasia) {
    if (idade >= 13) {
        if (idade >= 15) {
            return "Os vingadores";
        } else {
            if (gostaDeFantasia) {
                return "As aventuras de pi";
            } else {
                return "Depois da chuva";
            }
        }
    } else {
        if (gostaDeFantasia) {
            return "A viagem de chihiro";
        } else {
            return "velozes e furiosos";
        }
    }
}function geraRecomendacao(idade, gostaDeFantasia) {
    if (idade >= 16) {
        if (idade >= 16) {
            return "O menino que descobriu o vento";
        } else {
            if (gostaDeFantasia) {
                return "As aventuras de pi";
            } else {
                return "Depois da chuva";
            }
        }
    } else {
        if (gostaDeFantasia) {
            return "A viagem de chihiro";
        } else {
            return "velozes e furiosos";
        }
    }
}function setup() {
    createCanvas(800, 400);
    campoIdade = createInput("15");
    campoFantasia = createCheckbox("Gosta de fantasia?");
}

function draw() {
    background(220);
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao( gostaDeFantasia);

    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}function draw() {
    background(220);
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    fill(color(76, 0, 115)); // Um tom de roxo escuro
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}function draw() {
    background("#2196F3");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}function draw() {
    background("rgb(255,255,255)");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    fill(color(96, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}function setup() {
    createCanvas(800, 400);
    createSpan("Sua idade:");
    campoIdade = createInput("5");
    campoFantasia = createCheckbox(" Gosta de fantasia?");
}function setup() {
    createCanvas(800, 400);
    createSpan("Sua idade:");
    campoIdade = createInput("5");
    campoFantasia = createCheckbox(" Gosta de fantasia?");
}

function draw() {
    background("rgb(0,0,0)");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia) {
    if (idade >= 17) {
        if (idade >= 14) {
            return "O menino que descobriu o vento";
        } else {
            if (gostaDeFantasia) {
                return "As aventuras de pi";
            } else {
                return "Depois da chuva";
            }
        }
    } else {
        if (gostaDeFantasia) {
            return "A viagem de chihiro";
        } else {
            return "O feitiço do tempo";
        }
    }
}
function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
}function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}function geraRecomendacao(idade, gostaDeFantasia) {
    if (idade >= 15) {
        if (idade >= 14) {
            return "velozes e furiosos 9";
        } else {
            if (gostaDeFantasia) {
                return "breaking bread";
            } else {
                return "guardioes da galaxia 2";
            }
        }
    } else {
        if (gostaDeFantasia) {
            return "A viagem de chihiro";
        } else {
            return "stranger things";
        }
    }
}function geraRecomendacao(idade, gostaDeFantasia) {
  if (idade >= 15) {
    if (idade >= 14) {
      return "breaking bread";
    } else {
      if (idade >= 12) {
        return "velozes e furiosos";
      } else {
        if (gostaDeFantasia) {
          return "As aventuras de pi";
        } else {
          return "Depois da chuva";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem de chihiro";
    } else {
      return "O feitiço do tempo";
    }
  }
}let idade = 15;
let possuiPermissao = true;

function verificaIdade(idade, possuiPermissao) {
  if (idade >= 18 || possuiPermissao) {
    return "Você pode dirigir!";
  } else {
    return "Você não pode dirigir.";
  }
}let campoOrcamento;
let campoPraia;
let campoCidadeGrande;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Qual sua idade ");
  campoOrcamento = createInput("10");
  campoPraia = createCheckbox("Gosta de aventuras");
  campoCidadeGrande = createCheckbox("Gosta de AÇÂO?");
}

function draw() {
  background("#65A7C7");
  let orcamento = parseFloat(campoOrcamento.value());
  let gostaDePraia = campoPraia.checked();
  let gostaDeCidadesGrandes = campoCidadeGrande.checked();
  let recomendacao = geraRecomendacao(orcamento, gostaDePraia, gostaDeCidadesGrandes);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(orcamento, gostaDePraia, gostaDefilmes) {
  if (orcamento >= 1000) {
    if (gostaDePraia) {
      return "homem aranha longe de casa.";
    } else if (gostaDeCidadesGrandes) {
      return "uma noite de crime.";
    } else {
      return "tartarugas ninjas";
    }
  } else if (orcamento >= 500) {
    if (gostaDePraia) {
      return "grand turismo";
    } else if (gostaDeCidadesGrandes) {
      return "o ataque";
    } else {
      return "bad boys.";
    }
  } else {
    if (gostaDePraia) {
      return "homem aranha de volta para casa";
    } else if (gostaDefilmes) {
      return "velozes e furiosos 9";
    } else {
      return "breaking bread.";
    }
  }
}                                                                                                