class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados(){
        for(let i in this){
            //console.log(i, this[i]) //mostra o atribulo e seu respectivo valor
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false
            }
        }

        return true //se passar pelo if acima se nenhum for atendido, vai retornar true
    }
}

//classe criada depois para armazenar indices dinamicos
class Bd{

    constructor(){
        let id = localStorage.getItem('id')

        if(id == null){
            localStorage.setItem('id', 0)
        }
    }

    
    gravar(d){
        
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d)) //nao me lembro o pq
        localStorage.setItem('id', id)
    }

    getProximoId(){
        let proximoId = localStorage.getItem('id') //inicialmente o valor sera null
        //console.log(parseInt(proximoId) + 1)
        return parseInt(proximoId) + 1
    }
}

//intancia da classe Bd para guardar indices dinamicos
let bd = new Bd()

function cadastrarDespesa(){
    
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    if(despesa.validarDados()){
        //se true
       // bd.gravar(despesa) //dialog de sucesso
       console.log('dados válidos')
    } else {
        //se false
        //dialog de erro
        console.log('dados inválidos')

    }
    

   
}



