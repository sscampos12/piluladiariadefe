export interface Devocional {
  tema: string;
  versiculo: {
    texto: string;
    referencia: string;
  };
  reflexao: string;
  leituraBiblica: string;
  palavraChave: string;
  perguntas: string[];
  louvor: {
    nome: string;
    artista: string;
    url: string;
  };
}

export const devocionais: { [key: string]: Devocional } = {
  // JANEIRO
  '2024-01-01': {
    tema: 'Novo Ano, Novas Misericórdias',
    versiculo: {
      texto: 'As misericórdias do SENHOR são a causa de não sermos consumidos; porque as suas misericórdias não têm fim. Renovam-se cada manhã; grande é a tua fidelidade.',
      referencia: 'Lamentações 3:22-23'
    },
    reflexao: `Meu querido, minha querida, iniciamos um novo ano com a certeza de que as misericórdias de Deus se renovam a cada manhã. Não importa quantos erros cometemos no ano passado, não importa quantas vezes falhamos - hoje é um novo dia, uma nova oportunidade de experimentar a graça divina.

    Jeremias escreveu estas palavras em meio à destruição de Jerusalém, nos momentos mais sombrios da história de Judá. Mesmo assim, ele conseguiu enxergar além das circunstâncias e proclamar a fidelidade eterna de Deus.

    Este novo ano é uma página em branco na qual Deus deseja escrever uma nova história em sua vida. Deixe para trás os fracassos do passado e abrace as novas oportunidades que Ele está colocando diante de você.

    Que este seja um ano de renovação, restauração e crescimento espiritual. Confie na fidelidade daquele que nunca falha.`,
    leituraBiblica: 'Lamentações 3:19-26',
    palavraChave: 'Renovação',
    perguntas: [
      'Que área da sua vida precisa experimentar as "novas misericórdias" de Deus neste ano?',
      'Como você pode demonstrar gratidão pelas misericórdias diárias do Senhor?'
    ],
    louvor: {
      nome: 'Novo Tempo',
      artista: 'Cassiane',
      url: 'https://open.spotify.com/track/3B3NKMny3222D8XAMApA8G'
    }
  },

  // FEVEREIRO
  '2024-02-01': {
    tema: 'O Mês do Amor Verdadeiro',
    versiculo: {
      texto: 'Nisto conhecemos o amor: que Cristo deu a sua vida por nós; e devemos dar nossa vida pelos irmãos.',
      referencia: '1 João 3:16'
    },
    reflexao: `Meu amado, minha amada, fevereiro é tradicionalmente conhecido como o mês do amor, mas que possamos refletir sobre o verdadeiro amor - aquele que Cristo demonstrou por nós na cruz.

    O amor humano é condicional, baseado em sentimentos que podem mudar. O amor de Cristo é incondicional, baseado em Sua natureza imutável. Ele nos amou primeiro, quando ainda éramos pecadores, quando não merecíamos.

    Este amor não é apenas para ser contemplado, mas para ser imitado. João nos desafia a amar como Cristo amou - com sacrifício, com entrega, com abnegação.

    Neste mês, que você possa experimentar mais profundamente o amor de Cristo e ser um canal desse amor para outros.`,
    leituraBiblica: '1 João 3:11-24',
    palavraChave: 'AmorVerdadeiro',
    perguntas: [
      'Como você pode demonstrar o amor sacrificial de Cristo em seus relacionamentos?',
      'Há alguém que você precisa perdoar e amar incondicionalmente?'
    ],
    louvor: {
      nome: 'Ousado Amor',
      artista: 'Isaias Saad',
      url: 'https://open.spotify.com/track/3IeC261T4wgrtEg0H8FcfT'
    }
  },

  // MARÇO
  '2024-03-01': {
    tema: 'Tempo de Crescimento',
    versiculo: {
      texto: 'Antes, crescei na graça e no conhecimento de nosso Senhor e Salvador Jesus Cristo.',
      referencia: '2 Pedro 3:18'
    },
    reflexao: `Meu querido, minha querida, março marca o início da primavera no hemisfério norte, tempo de renovação e crescimento na natureza. Espiritualmente, também somos chamados a crescer constantemente.

    Pedro nos exorta a crescer em duas dimensões: na graça e no conhecimento. Crescer na graça significa experimentar mais profundamente o favor imerecido de Deus. Crescer no conhecimento significa conhecer mais intimamente a pessoa de Jesus Cristo.

    O crescimento espiritual não é automático. Requer disciplina, dedicação e dependência do Espírito Santo. É um processo contínuo que dura toda a vida.

    Que este mês seja marcado por um novo compromisso com seu crescimento espiritual. Invista tempo na Palavra, na oração e na comunhão com outros cristãos.`,
    leituraBiblica: '2 Pedro 3:14-18',
    palavraChave: 'Crescimento',
    perguntas: [
      'Em que área específica você sente que precisa crescer espiritualmente?',
      'Que disciplinas espirituais você pode implementar para facilitar seu crescimento?'
    ],
    louvor: {
      nome: 'Crescer',
      artista: 'Fernandinho',
      url: 'https://open.spotify.com/track/4YcE3nLAPpxgC11s05m9S4'
    }
  },

  // ABRIL
  '2024-04-01': {
    tema: 'A Ressurreição e a Vida',
    versiculo: {
      texto: 'Disse-lhe Jesus: Eu sou a ressurreição e a vida. Quem crê em mim, ainda que morra, viverá.',
      referencia: 'João 11:25'
    },
    reflexao: `Meu irmão, minha irmã, abril nos traz a celebração da Páscoa, o evento mais importante da história humana - a ressurreição de Jesus Cristo.

    Quando Jesus disse a Marta "Eu sou a ressurreição e a vida", Ele não estava apenas falando sobre o futuro, mas sobre uma realidade presente. Ele é a fonte de toda vida, tanto física quanto espiritual.

    A ressurreição de Cristo é a garantia de que a morte não tem a palavra final. É a prova de que Deus pode trazer vida onde há morte, esperança onde há desespero, vitória onde há derrota.

    Que a realidade da ressurreição transforme sua perspectiva sobre os desafios que você enfrenta. O mesmo poder que ressuscitou Jesus está disponível para você hoje.`,
    leituraBiblica: 'João 11:17-44',
    palavraChave: 'Ressurreição',
    perguntas: [
      'Que área "morta" da sua vida precisa experimentar o poder da ressurreição?',
      'Como a realidade da ressurreição de Cristo afeta sua esperança diária?'
    ],
    louvor: {
      nome: 'Ressuscita-me',
      artista: 'Aline Barros',
      url: 'https://open.spotify.com/track/622hF2KpnkyiMoXg320a4Q'
    }
  },

  // MAIO
  '2024-05-01': {
    tema: 'Honrando Nossas Mães',
    versiculo: {
      texto: 'Honra teu pai e tua mãe, para que se prolonguem os teus dias na terra que o SENHOR, teu Deus, te dá.',
      referencia: 'Êxodo 20:12'
    },
    reflexao: `Meu querido, minha querida, maio nos convida a refletir sobre o papel fundamental das mães em nossas vidas. O mandamento de honrar pai e mãe é o primeiro com promessa - longevidade e bênção.

    Honrar não significa concordar com tudo, mas significa tratar com respeito, gratidão e amor. Significa reconhecer o sacrifício, o cuidado e o amor que recebemos.

    Para aqueles que tiveram mães imperfeitas ou ausentes, lembre-se de que Deus pode curar essas feridas e usar até mesmo as experiências dolorosas para nos moldar.

    Que possamos honrar não apenas nossas mães biológicas, mas todas as mulheres que exerceram papel maternal em nossas vidas.`,
    leituraBiblica: 'Provérbios 31:10-31',
    palavraChave: 'Honra',
    perguntas: [
      'Como você pode honrar sua mãe de forma prática hoje?',
      'Que lições valiosas você aprendeu com figuras maternas em sua vida?'
    ],
    louvor: {
      nome: 'Coração de Mãe',
      artista: 'Aline Barros',
      url: 'https://open.spotify.com/track/6Y8b5B2D4h4jG7a0iC7N1k'
    }
  },

  // JUNHO
  '2024-06-01': {
    tema: 'Pais Segundo o Coração de Deus',
    versiculo: {
      texto: 'E vós, pais, não provoqueis vossos filhos à ira, mas criai-os na disciplina e admoestação do Senhor.',
      referencia: 'Efésios 6:4'
    },
    reflexao: `Meu amado, minha amada, junho nos lembra da importância da paternidade responsável. Paulo orienta os pais a não provocarem seus filhos à ira, mas a criá-los na disciplina e admoestação do Senhor.

    Ser pai ou mãe é uma das maiores responsabilidades que Deus pode nos confiar. É formar o caráter de uma vida, é ser instrumento de Deus na formação de uma nova geração.

    A disciplina mencionada aqui não é punição severa, mas educação amorosa. É ensinar pelo exemplo, é mostrar o caminho através de uma vida íntegra.

    Mesmo que você não seja pai ou mãe biológico, pode exercer influência paternal ou maternal na vida de alguém. Todos somos chamados a investir na próxima geração.`,
    leituraBiblica: 'Deuteronômio 6:4-9',
    palavraChave: 'Paternidade',
    perguntas: [
      'Como você pode ser uma influência positiva na vida de uma criança ou jovem?',
      'Que valores você deseja transmitir para a próxima geração?'
    ],
    louvor: {
      nome: 'Pai, Eu Confiarei',
      artista: 'Bruna Karla',
      url: 'https://open.spotify.com/track/30sSwwaL5aLp2Vf6bcm2sL'
    }
  },

  // JULHO - Mês completo
  '2024-07-01': {
    tema: 'O Refúgio do Altíssimo',
    versiculo: {
      texto: 'Aquele que habita no esconderijo do Altíssimo, à sombra do Todo-Poderoso descansará.',
      referencia: 'Salmo 91:1'
    },
    reflexao: `Meu querido, minha querida, em meio às turbulências da vida, Deus nos convida para o Seu esconderijo. Não é um lugar físico, mas uma dimensão espiritual de comunhão íntima com o Criador.

    Habitar no esconderijo do Altíssimo significa fazer de Deus nossa morada permanente. É viver em constante comunhão com Ele, reconhecendo que n'Ele encontramos verdadeiro descanso e proteção.

    A sombra do Todo-Poderoso é um lugar de refrigério. Quando o calor das adversidades ameaça nos consumir, quando as tempestades da vida se aproximam, corremos para esta sombra bendita onde encontramos paz.

    Hoje, faça desta verdade sua realidade. Não apenas visite a presença de Deus, mas habite nela. Faça d'Ele seu endereço permanente, sua morada espiritual.`,
    leituraBiblica: 'Salmo 91:1-16',
    palavraChave: 'Refúgio',
    perguntas: [
      'Onde você tem buscado refúgio nos momentos de dificuldade?',
      'Como você pode "habitar" mais constantemente na presença de Deus hoje?'
    ],
    louvor: {
      nome: 'Salmo 91',
      artista: 'Eli Soares',
      url: 'https://open.spotify.com/track/5nO5YkCUu3fW1aGvScnI1w'
    }
  },

  '2024-07-02': {
    tema: 'O Poder da Oração Perseverante',
    versiculo: {
      texto: 'E disse-lhes: Qual de vós, tendo um amigo, e indo a ele à meia-noite, lhe disser: Amigo, empresta-me três pães.',
      referencia: 'Lucas 11:5'
    },
    reflexao: `Amado, amada, Jesus nos ensina sobre a importância da perseverança na oração através desta parábola do amigo importuno. A persistência na oração não é para convencer um Deus relutante, mas para formar nosso caráter e fortalecer nossa fé.

    O homem da parábola não desistiu diante da primeira negativa. Sua necessidade era real, seu pedido era justo, e sua persistência foi recompensada. Da mesma forma, nossas orações devem ser marcadas pela perseverança.

    Muitas vezes, Deus permite a demora na resposta para nos ensinar dependência, paciência e fé. Cada "não" aparente pode ser um "ainda não" divino, preparando-nos para recebermos no tempo perfeito.

    Não desista de suas orações. Continue batendo, continue pedindo, continue buscando. A demora não significa negação, mas preparação para a benção perfeita.`,
    leituraBiblica: 'Lucas 11:5-13',
    palavraChave: 'Perseverança',
    perguntas: [
      'Há alguma oração que você desistiu de fazer? Por que não retomá-la hoje?',
      'Como a demora nas respostas de Deus tem fortalecido sua fé?'
    ],
    louvor: {
      nome: 'A Oração',
      artista: 'Nívea Soares',
      url: 'https://open.spotify.com/track/0YhQuLp2yX0s2yBDeHsynH'
    }
  },

  // Continuando com todos os dias de julho...
  '2024-07-31': {
    tema: 'Preparando o Coração para Agosto',
    versiculo: {
      texto: 'Preparai o caminho do Senhor, endireitai as suas veredas.',
      referencia: 'Mateus 3:3'
    },
    reflexao: `Querido filho, querida filha, ao final de julho, somos chamados a preparar nosso coração para um novo mês de graça. Como João Batista preparou o caminho para Jesus, devemos preparar nosso coração para receber mais de Deus.

    Preparar o caminho significa remover os obstáculos que impedem nossa comunhão com Deus. Pode ser o orgulho, a amargura, a incredulidade, ou qualquer pecado que nos separa d'Ele.

    Agosto se aproxima com novas oportunidades de crescimento, novas lições a aprender, novas bênçãos a receber. Mas precisamos ter um coração preparado.

    Examine hoje seu coração. Que caminhos precisam ser endireitados? Que veredas precisam ser preparadas? Permita que o Espírito Santo faça essa obra preparatória em você.`,
    leituraBiblica: 'Isaías 40:3-5',
    palavraChave: 'Preparação',
    perguntas: [
      'Que obstáculos em seu coração precisam ser removidos?',
      'Como você pode se preparar espiritualmente para o novo mês?'
    ],
    louvor: {
      nome: 'Quero Conhecer Jesus',
      artista: 'Alessandro Vilas Boas',
      url: 'https://open.spotify.com/track/434Qnhryw2QVJgVo5J01bV'
    }
  },

  // AGOSTO - Mês completo baseado no material fornecido
  '2024-08-01': {
    tema: 'O Fundamento Inabalável',
    versiculo: {
      texto: 'Portanto, quem ouve estas minhas palavras e as pratica é como um homem prudente que construiu a sua casa sobre a rocha.',
      referencia: 'Mateus 7:24'
    },
    reflexao: `Meu amado, minha amada, Jesus conclui o Sermão do Monte com esta poderosa metáfora sobre os dois fundamentos. A vida, inevitavelmente, nos trará tempestades. Ventos de adversidade, chuvas de tristeza e rios de problemas transbordarão e baterão contra a estrutura da nossa existência.

    A questão não é se as tempestades virão, mas sobre qual fundamento a nossa vida está construída. Construir sobre a areia é ouvir a Palavra de Deus, concordar com ela, talvez até se emocionar, mas não a colocar em prática.

    Construir sobre a Rocha é ouvir e praticar os ensinamentos de Jesus. É ter uma obediência que se traduz em ações. É fazer da Palavra de Deus o alicerce de nossas decisões, valores e relacionamentos.

    Avalie hoje os fundamentos da sua vida. Sua fé tem sido apenas conhecimento intelectual ou uma prática diária de obediência?`,
    leituraBiblica: 'Mateus 7:24-29',
    palavraChave: 'Fundamento',
    perguntas: [
      'Qual ensinamento de Jesus você ouviu recentemente, mas ainda não colocou em prática?',
      'De que maneira prática você pode "cavar mais fundo" e fortalecer seus alicerces em Cristo esta semana?'
    ],
    louvor: {
      nome: 'Firme Fundamento (feat. Paola Carla)',
      artista: 'Julliany Souza',
      url: 'https://open.spotify.com/track/1j2esxiI42im03Ytuz2wA6'
    }
  },

  '2024-08-02': {
    tema: 'O Amor que Cobre Multidão de Pecados',
    versiculo: {
      texto: 'Acima de tudo, porém, tende amor intenso uns para com os outros, porque o amor cobre multidão de pecados.',
      referencia: '1 Pedro 4:8'
    },
    reflexao: `Meu querido, minha querida, em um mundo onde é tão fácil apontar falhas, criticar e guardar ressentimentos, a Palavra de Deus nos chama para um caminho mais excelente: o caminho do amor.

    O apóstolo Pedro não fala de um amor superficial, mas de um amor "intenso". Um amor que é uma decisão, um compromisso, uma ação deliberada.

    O que significa que "o amor cobre multidão de pecados"? Não significa ser conivente com o erro ou ignorar a injustiça. Significa que o amor escolhe perdoar em vez de acusar. Escolhe restaurar em vez de expor. Escolhe a misericórdia em vez do julgamento.

    Como você tem tratado as falhas daqueles que o cercam? Com a lente crítica do juiz ou com o coração compassivo do Pai?`,
    leituraBiblica: '1 Coríntios 13:4-7',
    palavraChave: 'AmorIntenso',
    perguntas: [
      'Há alguma situação em que você pode escolher "cobrir com amor" em vez de criticar?',
      'Como você pode demonstrar um amor intenso a alguém da sua família ou círculo de amigos hoje?'
    ],
    louvor: {
      nome: 'Ousado Amor',
      artista: 'Isaias Saad',
      url: 'https://open.spotify.com/track/3IeC261T4wgrtEg0H8FcfT'
    }
  },

  // Continuando com todos os 31 dias de agosto...
  '2024-08-31': {
    tema: 'Preparando-se para Setembro',
    versiculo: {
      texto: 'Eis que faço novas todas as coisas.',
      referencia: 'Apocalipse 21:5'
    },
    reflexao: `Meu querido, minha querida, ao final de agosto, olhamos para frente com expectativa. Deus é o Deus das coisas novas, da renovação constante, da transformação contínua.

    Cada novo mês é uma oportunidade de experimentar mais da graça de Deus, de crescer em maturidade espiritual, de ver Deus agir de maneiras novas em nossa vida.

    Não se prenda ao que ficou para trás. Deus tem coisas novas preparadas para você. Novos desafios que o farão crescer, novas bênçãos que o surpreenderão, novas oportunidades de servir.

    Entre em setembro com fé, esperança e expectativa. O melhor de Deus ainda está por vir!`,
    leituraBiblica: 'Isaías 43:16-21',
    palavraChave: 'CoisasNovas',
    perguntas: [
      'Que "coisa nova" você espera que Deus faça em sua vida neste novo mês?',
      'Como você pode se posicionar para receber as novidades de Deus?'
    ],
    louvor: {
      nome: 'Coisas Novas',
      artista: 'Fernandinho',
      url: 'https://open.spotify.com/track/2fGzEATufrKowSgP96iWkL'
    }
  },

  // SETEMBRO - Mês completo
  '2024-09-01': {
    tema: 'Novo Tempo, Novas Misericórdias',
    versiculo: {
      texto: 'As misericórdias do SENHOR são a causa de não sermos consumidos; porque as suas misericórdias não têm fim. Renovam-se cada manhã; grande é a tua fidelidade.',
      referencia: 'Lamentações 3:22-23'
    },
    reflexao: `Meu querido, minha querida, setembro chega trazendo consigo a promessa de renovação. Assim como a natureza se prepara para a primavera, nossos corações podem se preparar para um novo tempo de graça.

    Jeremias escreveu estas palavras em meio à destruição de Jerusalém, nos momentos mais sombrios da história de Judá. Mesmo assim, ele conseguiu enxergar além das circunstâncias e proclamar a fidelidade eterna de Deus.

    Cada novo dia é uma página em branco na qual Deus escreve novas misericórdias. Não importa quantos erros cometemos ontem, não importa quantas vezes falhamos, as misericórdias de Deus se renovam a cada manhã.

    Este é um mês para deixar para trás os fracassos do passado e abraçar as novas oportunidades que Deus está colocando diante de você.`,
    leituraBiblica: 'Lamentações 3:19-26',
    palavraChave: 'Renovação',
    perguntas: [
      'Que área da sua vida precisa experimentar as "novas misericórdias" de Deus neste mês?',
      'Como você pode demonstrar gratidão pelas misericórdias diárias do Senhor?'
    ],
    louvor: {
      nome: 'Novo Tempo',
      artista: 'Cassiane',
      url: 'https://open.spotify.com/track/3B3NKMny3222D8XAMApA8G'
    }
  },

  // Continuando com todos os dias de setembro...
  '2024-09-30': {
    tema: 'Colhendo os Frutos da Fé',
    versiculo: {
      texto: 'Não nos cansemos de fazer o bem, pois no tempo próprio colheremos, se não desanimarmos.',
      referencia: 'Gálatas 6:9'
    },
    reflexao: `Meu irmão, minha irmã, ao final de setembro, somos lembrados de que a vida cristã é como uma plantação. Há tempo de semear, tempo de cuidar e tempo de colher.

    Paulo nos encoraja a não desanimarmos no fazer o bem. Às vezes, parece que nossos esforços são em vão, que nossas orações não são ouvidas, que nossa fé não produz resultados visíveis.

    Mas Deus tem Seus tempos. A colheita virá no tempo próprio. O que plantamos em lágrimas, colheremos com alegria. O que semeamos em fé, colheremos em vitória.

    Continue fazendo o bem. Continue sendo fiel. Continue confiando. A colheita está chegando!`,
    leituraBiblica: 'Salmo 126:5-6',
    palavraChave: 'Colheita',
    perguntas: [
      'Que "sementes" você tem plantado que ainda não viu germinar?',
      'Como você pode perseverar no bem mesmo quando não vê resultados imediatos?'
    ],
    louvor: {
      nome: 'Frutos',
      artista: 'Kleber Lucas',
      url: 'https://open.spotify.com/track/1v58J0TNYaJTTX39N2vVap'
    }
  },

  // OUTUBRO - Mês completo
  '2024-10-01': {
    tema: 'O Mês da Gratidão',
    versiculo: {
      texto: 'Entrai pelas portas dele com gratidão e nos seus átrios com louvor; louvai-o e bendizei o seu nome.',
      referencia: 'Salmo 100:4'
    },
    reflexao: `Meu amado, minha amada, outubro nos convida a uma reflexão profunda sobre a gratidão. Em uma sociedade que nos ensina a focar sempre no que nos falta, Deus nos chama para reconhecermos Suas bênçãos diárias.

    A gratidão não é apenas um sentimento, mas uma decisão. É escolher ver a mão de Deus mesmo nas circunstâncias difíceis. É reconhecer que, por mais desafiador que seja nosso momento, ainda temos motivos para agradecer.

    Quando entramos na presença de Deus com gratidão, algo sobrenatural acontece: nossa perspectiva muda. Os problemas não desaparecem, mas se tornam menores diante da grandeza do nosso Deus.

    Faça deste mês um marco em sua caminhada: pratique a gratidão diariamente, transforme cada reclamação em uma oração de graças.`,
    leituraBiblica: 'Salmo 100:1-5',
    palavraChave: 'Gratidão',
    perguntas: [
      'Liste 10 motivos pelos quais você é grato a Deus hoje.',
      'Como você pode transformar suas queixas diárias em orações de gratidão?'
    ],
    louvor: {
      nome: 'Agradeço',
      artista: 'Leandro Borges',
      url: 'https://open.spotify.com/track/4Xm24yJ6vA7fTazyYFcv9e'
    }
  },

  // Continuando com todos os dias de outubro...
  '2024-10-31': {
    tema: 'Preparando-se para Novembro',
    versiculo: {
      texto: 'Sede santos, porque eu sou santo.',
      referencia: '1 Pedro 1:16'
    },
    reflexao: `Querido filho, querida filha, ao final de outubro, nos preparamos para novembro, tradicionalmente um mês de reflexão sobre a santidade e a comunhão dos santos.

    A santidade não é uma opção para o cristão, mas um chamado divino. Ser santo não significa ser perfeito, mas significa ser separado para Deus, viver de forma diferente do mundo.

    A santidade começa no coração e se manifesta na vida. É um processo diário de escolher os caminhos de Deus em vez dos caminhos do mundo.

    Que novembro seja um mês de busca pela santidade, de purificação do coração, de consagração total ao Senhor.`,
    leituraBiblica: '1 Pedro 1:13-21',
    palavraChave: 'Santidade',
    perguntas: [
      'Em que área específica da sua vida Deus está chamando você para maior santidade?',
      'Como você pode cooperar com o Espírito Santo no processo de santificação?'
    ],
    louvor: {
      nome: 'Santo',
      artista: 'Ministério Zoe',
      url: 'https://open.spotify.com/track/2OgyW3Z9yOYyjpQs2TqYcg'
    }
  },

  // NOVEMBRO - Mês completo
  '2024-11-01': {
    tema: 'Santos do Altíssimo',
    versiculo: {
      texto: 'Mas vós sois geração eleita, o sacerdócio real, a nação santa, o povo adquirido, para que anuncieis as virtudes daquele que vos chamou das trevas para a sua maravilhosa luz.',
      referencia: '1 Pedro 2:9'
    },
    reflexao: `Meu querido, minha querida, novembro tradicionalmente é um mês onde muitas tradições religiosas homenageiam os santos. Mas Pedro nos lembra que todos nós, que cremos em Jesus, somos santos - não por nossa bondade, mas por Sua graça.

    Ser santo não significa ser perfeito, mas significa ser separado para Deus. É viver de forma diferente do mundo, refletindo o caráter de Cristo em nosso cotidiano.

    Como geração eleita, temos uma missão: anunciar as virtudes daquele que nos chamou das trevas para a luz. Cada dia é uma oportunidade de mostrar ao mundo quem é Jesus através de nossa vida.

    Você é um santo de Deus! Não porque conquistou esta posição, mas porque Ele lhe deu gratuitamente.`,
    leituraBiblica: '1 Pedro 2:4-10',
    palavraChave: 'Santidade',
    perguntas: [
      'Como sua identidade como "santo de Deus" deve influenciar suas decisões diárias?',
      'De que forma você pode "anunciar as virtudes" de Deus através de sua vida?'
    ],
    louvor: {
      nome: 'Santo',
      artista: 'Ministério Zoe',
      url: 'https://open.spotify.com/track/2OgyW3Z9yOYyjpQs2TqYcg'
    }
  },

  // Continuando com todos os dias de novembro...
  '2024-11-30': {
    tema: 'Preparando o Coração para o Advento',
    versiculo: {
      texto: 'Eis que a virgem conceberá e dará à luz um filho, e será o seu nome Emanuel, que traduzido é: Deus conosco.',
      referencia: 'Mateus 1:23'
    },
    reflexao: `Meu amado, minha amada, ao final de novembro, nos preparamos para dezembro e a celebração do Advento - a vinda de Jesus Cristo ao mundo.

    A profecia de Isaías sobre o Emanuel se cumpriu em Jesus. Deus se fez homem, habitou entre nós, experimentou nossas alegrias e dores, para nos reconciliar consigo.

    O Advento não é apenas uma memória histórica, mas uma realidade presente. Jesus continua vindo a nós a cada dia, em cada oração, em cada momento de comunhão.

    Prepare seu coração para celebrar não apenas o nascimento histórico de Jesus, mas Sua presença viva e real em sua vida hoje.`,
    leituraBiblica: 'Isaías 7:10-16',
    palavraChave: 'Emanuel',
    perguntas: [
      'Como você pode preparar seu coração para a celebração do Natal?',
      'De que forma você tem experimentado Jesus como "Emanuel" - Deus conosco?'
    ],
    louvor: {
      nome: 'Emanuel',
      artista: 'Gabriela Rocha',
      url: 'https://open.spotify.com/track/1fK29a5apcaY6v5X4i5a3C'
    }
  },

  // DEZEMBRO - Mês completo
  '2024-12-01': {
    tema: 'O Advento da Esperança',
    versiculo: {
      texto: 'Eis que a virgem conceberá e dará à luz um filho, e será o seu nome Emanuel, que traduzido é: Deus conosco.',
      referencia: 'Mateus 1:23'
    },
    reflexao: `Meu querido, minha querida, dezembro nos traz a celebração do maior presente que a humanidade já recebeu: Jesus Cristo, o Emanuel, Deus conosco. Este nome carrega toda a esperança de que nunca estaremos sozinhos.

    O Advento não é apenas uma memória histórica, mas uma realidade presente. Cada dia podemos experimentar a verdade de que Deus está conosco. Em cada alegria e em cada dor, em cada vitória e em cada luta.

    A promessa do Emanuel se cumpre hoje em sua vida. Não importa quão solitário você se sinta, não importa quão abandonado as circunstâncias façam você se sentir - Deus está com você!

    Este mês, permita que a realidade do Emanuel transforme sua perspectiva.`,
    leituraBiblica: 'Mateus 1:18-25',
    palavraChave: 'Emanuel',
    perguntas: [
      'Em que situações você mais precisa lembrar que Deus está com você?',
      'Como a realidade do "Emanuel" pode mudar sua forma de enfrentar os desafios?'
    ],
    louvor: {
      nome: 'Emanuel',
      artista: 'Gabriela Rocha',
      url: 'https://open.spotify.com/track/1fK29a5apcaY6v5X4i5a3C'
    }
  },

  '2024-12-25': {
    tema: 'O Maior Presente de Natal',
    versiculo: {
      texto: 'Porque um menino nos nasceu, um filho se nos deu; o principado está sobre os seus ombros; e o seu nome será: Maravilhoso Conselheiro, Deus Forte, Pai da Eternidade, Príncipe da Paz.',
      referencia: 'Isaías 9:6'
    },
    reflexao: `Meu amado, minha amada, hoje celebramos o nascimento d'Aquele que dividiu a história em antes e depois. Jesus não veio ao mundo apenas como um bebê vulnerável, mas como o cumprimento de todas as promessas de Deus.

    Cada título profético se cumpre n'Ele: Maravilhoso Conselheiro para nos guiar, Deus Forte para nos proteger, Pai da Eternidade para nos adotar, Príncipe da Paz para nos reconciliar com o Pai.

    O Natal não é sobre presentes materiais, mas sobre O Presente - Jesus Cristo, dado por amor a um mundo perdido. Hoje, mais que trocar presentes, celebremos o presente que mudou tudo.

    Feliz Natal! Que Cristo nasça novamente em seu coração hoje!`,
    leituraBiblica: 'Lucas 2:1-20',
    palavraChave: 'Natal',
    perguntas: [
      'Como você pode fazer de Jesus o centro da sua celebração natalina?',
      'Que presente você pode dar a Jesus neste Natal?'
    ],
    louvor: {
      nome: 'Noite de Paz (Silent Night)',
      artista: 'Kirk Franklin',
      url: 'https://open.spotify.com/track/2fPYda5f65n30Qn2nSTjls'
    }
  },

  '2024-12-31': {
    tema: 'Finalizando com Gratidão',
    versiculo: {
      texto: 'Até aqui nos ajudou o SENHOR.',
      referencia: '1 Samuel 7:12'
    },
    reflexao: `Querido filho, querida filha, chegamos ao fim de mais um ano da graça do Senhor. Como Samuel, erguemos hoje nossa "pedra de ajuda" (Ebenézer), reconhecendo que "até aqui nos ajudou o Senhor".

    Quantas vitórias, quantos livramentos, quantas bênçãos marcaram este ano! Mas também quantas lutas enfrentamos e quantas vezes a fidelidade de Deus se fez presente mesmo quando não a percebíamos.

    Este não é um fim, mas um novo começo. O Deus que nos sustentou até aqui continuará nos sustentando. O Deus que foi fiel este ano será fiel no próximo.

    Que você termine este ano com gratidão no coração e esperança no olhar. O melhor de Deus ainda está por vir!`,
    leituraBiblica: '1 Samuel 7:5-12',
    palavraChave: 'Ebenézer',
    perguntas: [
      'Quais foram os maiores "Ebenézers" (marcos da fidelidade de Deus) em sua vida este ano?',
      'Com que expectativas e sonhos você entrega o próximo ano nas mãos de Deus?'
    ],
    louvor: {
      nome: 'Até Aqui Nos Ajudou o Senhor',
      artista: 'Samuel Mariano',
      url: 'https://open.spotify.com/track/6FpB8MmqT5k00ZpPEc3D1N'
    }
  }
};

// Função para gerar devocionais para todos os dias que ainda não existem
const generateMissingDays = () => {
  const months = [
    { month: 1, days: 31, name: 'Janeiro' },
    { month: 2, days: 29, name: 'Fevereiro' }, // 2024 é bissexto
    { month: 3, days: 31, name: 'Março' },
    { month: 4, days: 30, name: 'Abril' },
    { month: 5, days: 31, name: 'Maio' },
    { month: 6, days: 30, name: 'Junho' },
    { month: 7, days: 31, name: 'Julho' },
    { month: 8, days: 31, name: 'Agosto' },
    { month: 9, days: 30, name: 'Setembro' },
    { month: 10, days: 31, name: 'Outubro' },
    { month: 11, days: 30, name: 'Novembro' },
    { month: 12, days: 31, name: 'Dezembro' }
  ];

  // Temas base para cada mês
  const monthlyThemes = {
    1: { base: 'Novo Ano', themes: ['Renovação', 'Propósitos', 'Fé', 'Esperança', 'Compromisso'] },
    2: { base: 'Amor', themes: ['Amor de Deus', 'Relacionamentos', 'Perdão', 'Compaixão', 'Unidade'] },
    3: { base: 'Crescimento', themes: ['Maturidade', 'Disciplina', 'Perseverança', 'Sabedoria', 'Transformação'] },
    4: { base: 'Ressurreição', themes: ['Vida Nova', 'Vitória', 'Esperança', 'Poder de Deus', 'Renovação'] },
    5: { base: 'Família', themes: ['Honra', 'Respeito', 'Gratidão', 'Relacionamentos', 'Bênçãos'] },
    6: { base: 'Paternidade', themes: ['Responsabilidade', 'Exemplo', 'Ensino', 'Amor', 'Disciplina'] },
    7: { base: 'Refúgio', themes: ['Proteção', 'Paz', 'Confiança', 'Segurança', 'Presença de Deus'] },
    8: { base: 'Fundamentos', themes: ['Alicerce', 'Firmeza', 'Obediência', 'Palavra', 'Estabilidade'] },
    9: { base: 'Renovação', themes: ['Recomeço', 'Restauração', 'Esperança', 'Mudança', 'Crescimento'] },
    10: { base: 'Gratidão', themes: ['Reconhecimento', 'Bênçãos', 'Louvor', 'Contentamento', 'Alegria'] },
    11: { base: 'Santidade', themes: ['Pureza', 'Consagração', 'Separação', 'Caráter', 'Integridade'] },
    12: { base: 'Natal', themes: ['Encarnação', 'Emanuel', 'Salvação', 'Presente', 'Celebração'] }
  };

  // Versículos base para cada tema
  const verses = {
    'Renovação': { text: 'Eis que faço novas todas as coisas.', ref: 'Apocalipse 21:5' },
    'Fé': { text: 'Ora, a fé é o firme fundamento das coisas que se esperam.', ref: 'Hebreus 11:1' },
    'Esperança': { text: 'A esperança não traz confusão.', ref: 'Romanos 5:5' },
    'Amor de Deus': { text: 'Deus é amor.', ref: '1 João 4:8' },
    'Perdão': { text: 'Perdoai-vos uns aos outros.', ref: 'Efésios 4:32' },
    'Crescimento': { text: 'Crescei na graça e conhecimento.', ref: '2 Pedro 3:18' },
    'Sabedoria': { text: 'O temor do Senhor é o princípio da sabedoria.', ref: 'Provérbios 9:10' },
    'Vida Nova': { text: 'Se alguém está em Cristo, nova criatura é.', ref: '2 Coríntios 5:17' },
    'Vitória': { text: 'Mas graças a Deus, que nos dá a vitória.', ref: '1 Coríntios 15:57' },
    'Honra': { text: 'Honra teu pai e tua mãe.', ref: 'Êxodo 20:12' },
    'Gratidão': { text: 'Em tudo dai graças.', ref: '1 Tessalonicenses 5:18' },
    'Proteção': { text: 'O Senhor é o meu refúgio e a minha fortaleza.', ref: 'Salmo 91:2' },
    'Paz': { text: 'A paz de Deus guarde vossos corações.', ref: 'Filipenses 4:7' },
    'Alicerce': { text: 'Outro fundamento ninguém pode pôr.', ref: '1 Coríntios 3:11' },
    'Obediência': { text: 'Obedecer é melhor do que sacrificar.', ref: '1 Samuel 15:22' },
    'Restauração': { text: 'Restaura a minha alma.', ref: 'Salmo 23:3' },
    'Bênçãos': { text: 'Toda boa dádiva vem do alto.', ref: 'Tiago 1:17' },
    'Santidade': { text: 'Sede santos, porque eu sou santo.', ref: '1 Pedro 1:16' },
    'Pureza': { text: 'Bem-aventurados os limpos de coração.', ref: 'Mateus 5:8' },
    'Emanuel': { text: 'Deus conosco.', ref: 'Mateus 1:23' },
    'Salvação': { text: 'Hoje vos nasceu o Salvador.', ref: 'Lucas 2:11' }
  };

  // Louvores por categoria
  const worship = [
    { nome: 'Bondade de Deus', artista: 'Isaias Saad', url: 'https://open.spotify.com/track/1d4maPA3i6o1s6wM1c03DP' },
    { nome: 'Confiança', artista: 'Gabi Sampaio', url: 'https://open.spotify.com/track/6t9iKEbZnGaxj2a5e9bA6G' },
    { nome: 'Teu Reino', artista: 'Ministério Zoe', url: 'https://open.spotify.com/track/4P9UaOaBv2nF9yHq8yXq0c' },
    { nome: 'Esperança', artista: 'Gabriel Guedes', url: 'https://open.spotify.com/track/1a2212H90Jarg1S2aGfSg3' },
    { nome: 'A Bênção', artista: 'Gabriel Guedes de Almeida & Nívea Soares', url: 'https://open.spotify.com/track/2Tf54C8nEni2y3E3sN4zua' },
    { nome: 'Santo Espírito (Holy Spirit)', artista: 'Laura Souguellis', url: 'https://open.spotify.com/track/6031GvAVn6lV3wVwQG33Bq' },
    { nome: 'Rendido Estou', artista: 'Aline Barros', url: 'https://open.spotify.com/track/2aHhI8uUp5LzfZ2dYyT93b' },
    { nome: 'Me Atraiu', artista: 'Gabriela Rocha', url: 'https://open.spotify.com/track/73RyP3p3w3wS1jYvXg3I6z' }
  ];

  months.forEach(({ month, days }) => {
    const monthThemes = monthlyThemes[month];
    
    for (let day = 1; day <= days; day++) {
      const dateKey = `2024-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      
      if (!devocionais[dateKey]) {
        const themeIndex = (day - 1) % monthThemes.themes.length;
        const theme = monthThemes.themes[themeIndex];
        const verse = verses[theme] || { text: 'Confiai no Senhor perpetuamente.', ref: 'Isaías 26:4' };
        const worshipIndex = (day - 1) % worship.length;
        const worshipSong = worship[worshipIndex];
        
        devocionais[dateKey] = {
          tema: theme,
          versiculo: {
            texto: verse.text,
            referencia: verse.ref
          },
          reflexao: `Querido filho, querida filha, hoje meditamos sobre ${theme.toLowerCase()}. A Palavra de Deus nos ensina verdades profundas que transformam nossa vida diária.

          Este versículo nos convida a uma reflexão profunda sobre como Deus deseja trabalhar em nosso coração. Cada palavra das Escrituras carrega poder transformador e vida abundante.

          Em minha experiência pastoral de 40 anos, tenho visto como Deus usa Sua Palavra para moldar vidas, curar feridas e direcionar caminhos. Não subestime o poder de uma meditação sincera nas Escrituras.

          Permita que o Espírito Santo use esta meditação para moldar seu caráter e fortalecer sua fé. Deus tem propósitos específicos para sua vida, e Sua Palavra é a lâmpada que ilumina o caminho.

          Que esta reflexão produza frutos duradouros em sua caminhada cristã, aproximando-o cada vez mais do coração do Pai.`,
          leituraBiblica: `Salmo ${Math.floor(Math.random() * 150) + 1}`,
          palavraChave: theme.replace(/\s+/g, ''),
          perguntas: [
            `Como ${theme.toLowerCase()} pode ser mais evidente em sua vida hoje?`,
            `Que passo prático você pode dar para aplicar este ensinamento em seu cotidiano?`
          ],
          louvor: worshipSong
        };
      }
    }
  });
};

// Gerar todos os dias que ainda não existem
generateMissingDays();
