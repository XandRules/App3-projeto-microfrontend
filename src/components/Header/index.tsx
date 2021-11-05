
import { Container, Content } from './styles';

export function Header(){
    return (
        <Container>
            <Content>
                <img  alt="dt money" />
                <button type="button">
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}