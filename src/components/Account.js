import react from 'react';

import Avatar from './Avatar';

export default class Account extends react.Component {

    constructor(props) {
        super(props);

        this.formUpdateHandle = this.formUpdateHandle.bind(this);
    }

    formUpdateHandle(e) {
        e.preventDefault();
    }

    render() {

        const styleForm = {
            margin: '2rem 0',
            maxWidth: '400px',
            display: 'grid',
            gridTemplateRows: '1fr .5fr 1fr 1fr',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            width: '100%',
            maxWidth: '600px'
        }
        
        return (
            <main>
                <Avatar src="https://images.unsplash.com/photo-1582415892501-9d50fafdbd9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" size="large" />
                <form style={ styleForm } onSubmit={ this.formUpdateHandle }>
                    <input placeholder="Nome completo" style={{ gridColumnStart: 1, gridColumnEnd: 3 }} />
                    
                    <div style={{ gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 1, gridColumnEnd: 2 }}>
                        <input type="radio" id="m-option" name="sex-option" defaultChecked={ true }></input>
                        <label htmlFor="m-option">Masculino</label>
                    </div>
                    
                    <div style={{ gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3 }}>
                        <input type="radio" id="f-option" name="sex-option"></input>
                        <label htmlFor="f-option">Feminino</label>
                    </div>

                    <select name="estado" defaultValue={''} style={{ gridRowStart: 3, gridRowEnd: 4, gridColumnStart: 1, gridColumnEnd: 2 }}>
                        <option value="" disabled={true}>Seu estado</option>
                        <option value="valor1">Valor 1</option>
                        <option value="valor2">Valor 2</option>
                        <option value="valor3">Valor 3</option>
                    </select>

                    {/* <input placeholder="Seu estado" style={{ gridRowStart: 3, gridRowEnd: 4, gridColumnStart: 1, gridColumnEnd: 2 }} /> */}
                    {/* <input placeholder="Sua cidade" style={{ gridRowStart: 3, gridRowEnd: 4, gridColumnStart: 2, gridColumnEnd: 3 }} /> */}

                    <select name="cidade" defaultValue={''} style={{ gridRowStart: 3, gridRowEnd: 4, gridColumnStart: 2, gridColumnEnd: 3 }}>
                        <option value="" disabled={true}>Sua cidade</option>
                        <option value="valor1">Valor 1</option>
                        <option value="valor2">Valor 2</option>
                        <option value="valor3">Valor 3</option>
                    </select>

                    <button color="primary" style={{ gridRowStart: 4, gridRowEnd: 5, gridColumnStart: 1, gridColumnEnd: 3 }} type="submit">Atualizar</button>
                </form>
            </main>
        );
    }
}