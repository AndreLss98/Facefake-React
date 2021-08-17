import { Component } from 'react';
import { Form } from './styles';

import Input from '../../../../components/atoms/input/Input';
import Select from '../../../../components/atoms/select/Select';
import ButtonAtom from '../../../../components/atoms/button/Button';

import ibgeApi from './../../../../services/ibgeApi';

export default class AccountForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            statesAddress: [],
            citys: [],
            canChooseCity: false,
            selectedStateAddress: '',
            selectedCityAddress: ''
        }

        this.handleStateAddress = this.handleStateAddress.bind(this);
        this.handleCityAddres = this.handleCityAddress.bind(this);
    }

    async componentDidMount() {
        const response = await ibgeApi.get('/localidades/estados');
        
        this.setState({
            statesAddress: response.data
        });
    }

    async handleStateAddress(e) {

        this.setState({
            selectedCityAddress: ''
        })

        this.setState({
            selectedStateAddress: e.target.value
        })

        this.setState({
            canChooseCity: true
        });

        const response = await ibgeApi.get(`/localidades/estados/${e.target.value}/municipios`)
        
        this.setState({
            citys: response.data
        });
    }

    handleCityAddress(e) {
        this.setState({
            selectedCityAddress: e.target.value
        })
    }

    render() {
        return (
            <Form>
                <Input placeholder="Nome completo" style={{ gridColumnStart: 1, gridColumnEnd: 3 }} />
    
                <div style={{ gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 1, gridColumnEnd: 2 }}>
                    <Input type="radio" id="m-option" name="sex-option" defaultChecked={ true }></Input>
                    <label htmlFor="m-option">Masculino</label>
                </div>
                
                <div style={{ gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3 }}>
                    <Input type="radio" id="f-option" name="sex-option"></Input>
                    <label htmlFor="f-option">Feminino</label>
                </div>
    
                <Select
                    name="estado"
                    value={ this.state.selectedStateAddress }
                    style={{ gridRowStart: 3, gridRowEnd: 4, gridColumnStart: 1, gridColumnEnd: 2 }}
                    onChange={ this.handleStateAddress }
                >
                    <option value="" disabled={true}>Seu estado</option>
                    { this.state.statesAddress.map((stateAddress, index) => <option key={ index } value={stateAddress.sigla}>{ `${stateAddress.sigla} - ${stateAddress.nome}` }</option>) }
                </Select>
    
                <Select
                    name="cidade"
                    value={ this.state.selectedCityAddress }
                    onChange={ this.handleCityAddres }
                    style={{ gridRowStart: 3, gridRowEnd: 4, gridColumnStart: 2, gridColumnEnd: 3 }} disabled={ !this.state.canChooseCity || !this.state.citys.length }
                >
                    <option value="" disabled={true}>Sua cidade</option>
                    { this.state.citys.map((city, index) => <option key={ index } value={city.nome}>{ city.nome }</option>) }
                </Select>
    
                <ButtonAtom color="primary" style={{ gridRowStart: 4, gridRowEnd: 5, gridColumnStart: 1, gridColumnEnd: 3 }} type="submit">Atualizar</ButtonAtom>
            </Form>
        );
    }
}