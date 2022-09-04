import React, { useState } from "react";

export default function App() {
  const [valorVisor, setValorVisor] = useState("0");
  const [valorMemoria, setValorMemoria] = useState("");
  const [operador, setOperador] = useState(null);

  const clicaBotao = (valor) => {
    const numero = isNaN(valor) ? ".1" : valor;
    setValorVisor(parseFloat(`${valorVisor}${numero}`));
    console.log(parseFloat(`${valorVisor}${numero}`));
  };

  const calcular = () => {
    if (operador === "Somar")
      return parseFloat(valorVisor) + parseFloat(valorMemoria);
    else if (operador === "Subtrair")
      return parseFloat(valorMemoria) - parseFloat(valorVisor);
    else if (operador === "Multiplicar")
      return parseFloat(valorVisor) * parseFloat(valorMemoria);

    return parseFloat(valorVisor) / parseFloat(valorMemoria);
  };

  const clicaOperador = (novoOperador) => {
    if (operador) {
      const resultado = calcular();

      setValorMemoria(resultado);
    } else {
      setValorMemoria(valorVisor);
    }
    setOperador(novoOperador);
    setValorVisor("0");
  };

  const clicaResultado = () => {
    const resultado = calcular();
    setValorVisor(resultado);
    setValorMemoria("0");
    setOperador("");
  };

  const limpar = () => {
    setValorVisor("0");
  };
  const apagar = () => {
    const novoValor = valorVisor.toString().slice(0, -1);
    setValorVisor(novoValor.length > 0 ? parseInt(novoValor) : 0);
  };

  return (
    <>
      <div className="container">
        <form>
          <div>
            <input className="valorMemoria" value={valorMemoria} />
          </div>
          <div>
            <input className="valorVisor" value={valorVisor} />
          </div>
        </form>

        <div className="teclas">
          <button onClick={() => limpar()} id="limpar">
            AC
          </button>
          <button onClick={() => apagar()} id="apagar">
            C
          </button>
          <button onClick={() => clicaOperador("Dividir")} id="dividir">
            /
          </button>
          <button onClick={() => clicaBotao(7)} id="numeros">
            7
          </button>
          <button onClick={() => clicaBotao(8)} id="numeros">
            8
          </button>
          <button onClick={() => clicaBotao(9)} id="numeros">
            9
          </button>
          <button onClick={() => clicaOperador("Multiplicar")} id="multiplicar">
            *
          </button>
          <button onClick={() => clicaBotao(4)} id="numeros">
            4
          </button>
          <button onClick={() => clicaBotao(5)} id="numeros">
            5
          </button>
          <button onClick={() => clicaBotao(6)} id="numeros">
            6
          </button>
          <button onClick={() => clicaOperador("Subtrair")} id="subtrair">
            -
          </button>
          <button onClick={() => clicaBotao(1)} id="numeros">
            1
          </button>
          <button onClick={() => clicaBotao(2)} id="numeros">
            2
          </button>
          <button onClick={() => clicaBotao(3)} id="numeros">
            3
          </button>
          <button onClick={() => clicaOperador("Somar")} id="somar">
            +
          </button>
          <button onClick={() => clicaBotao(0)} id="numeros">
            0
          </button>
          <button onClick={() => clicaBotao(".")} id="virgula">
            ,
          </button>
          <button onClick={() => clicaResultado()} id="resultado">
            =
          </button>
        </div>
      </div>
    </>
  );
}
