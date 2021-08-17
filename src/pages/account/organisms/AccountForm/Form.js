import { Form } from './styles';

import Input from '../../../../components/atoms/input/Input';
import Select from '../../../../components/atoms/select/Select';
import ButtonAtom from '../../../../components/atoms/button/Button';

export default () => {
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

            <Select name="estado" defaultValue={''} style={{ gridRowStart: 3, gridRowEnd: 4, gridColumnStart: 1, gridColumnEnd: 2 }}>
                <option value="" disabled={true}>Seu estado</option>
                <option value="valor1">Valor 1</option>
                <option value="valor2">Valor 2</option>
                <option value="valor3">Valor 3</option>
            </Select>

            <Select name="cidade" defaultValue={''} style={{ gridRowStart: 3, gridRowEnd: 4, gridColumnStart: 2, gridColumnEnd: 3 }}>
                <option value="" disabled={true}>Sua cidade</option>
                <option value="valor1">Valor 1</option>
                <option value="valor2">Valor 2</option>
                <option value="valor3">Valor 3</option>
            </Select>

            <ButtonAtom color="primary" style={{ gridRowStart: 4, gridRowEnd: 5, gridColumnStart: 1, gridColumnEnd: 3 }} type="submit">Atualizar</ButtonAtom>
        </Form>
    );
}