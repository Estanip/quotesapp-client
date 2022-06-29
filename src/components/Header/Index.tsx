import React, { useEffect } from 'react';
import { Card, Container, Navbar, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../Hooks/UseTypedSelector';
import { IState } from '../../interfaces';

import { getAverage } from '../../redux/actions';
import './Header.css';

export default function Header() {
    const dispatch = useDispatch();

    const { average } = useTypedSelector((state) => state.quotes)
    const { average_sell_price, average_buy_price } = average

    const { quotes }: IState = useTypedSelector((state) => state.quotes)

    useEffect(() => {
        if (quotes.length > 0) dispatch(getAverage())
    }, [quotes]);

    return (
        <Navbar variant="dark" bg="secondary" expand="lg">
            <Container fluid>
                <Navbar.Brand >ENCONTRA LA MEJOR COTIZACION</Navbar.Brand>
                <Card bg='warning'>
                    <Card.Title className="pt-2 px-3 text-muted">COTIZACION PROMEDIO</Card.Title>
                    <Card.Text className="pb-2 text-muted" >   
                        <small>
                            COMPRA: <strong>{average_buy_price ? average_buy_price : <Spinner size="sm" animation="border" variant="secondary" />}</strong>
                        </small>
                        <small id='quotes_limit'>
                            |
                        </small>
                        <small>
                            VENTA: <strong>{average_sell_price ? average_sell_price : <Spinner size='sm' animation="border" variant="secondary" />}</strong>
                        </small>
                    </Card.Text>
                </Card>
            </Container>
        </Navbar >
    );
}