import React, { useEffect } from 'react';
import { Card, Container, Navbar, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { getAverage } from '../../redux/actions';
import './Header.css';

export default function Header() {
    const dispatch = useDispatch();
    const { average_buy_price, average_sell_price } = useSelector((state: any) => state.reducer.quotes.average);
    const { quotes } = useSelector((state: any) => state.reducer.quotes);

    useEffect(() => {
        if (quotes.length > 0) dispatch(getAverage())
    }, [quotes]);

    return (
        <Navbar expand="sm" variant="dark" bg="secondary" style={{ marginBottom: '30px' }}>
            <Container>
                <Navbar.Brand>ENCONTRA LA MEJOR COTIZACION</Navbar.Brand>
                <Navbar.Brand>
                    <div style={styles.card_container}>
                        <Card bg='warning'>
                            <Card.Title style={styles.card_title}>COTIZACION PROMEDIO</Card.Title>
                            <Card.Text>
                                <small style={styles.quotes_item}>
                                    COMPRA: <strong>{average_buy_price ? average_buy_price : <Spinner size='sm' animation="border" variant="secondary" />}</strong>
                                </small>
                                <small style={styles.quotes_limit}>
                                    |
                                </small>
                                <small style={styles.quotes_item}>
                                    VENTA: <strong>{average_sell_price ? average_sell_price : <Spinner size='sm' animation="border" variant="secondary" />}</strong>
                                </small>
                            </Card.Text>
                        </Card>
                    </div>
                </Navbar.Brand>
            </Container>
        </Navbar >
    );
}

const styles = {
    card_container: { padding: '10px', marginRight: '-100px' },
    quotes_item: { fontSize: '13px', marginLeft: 'auto', marginRight: 'auto' },
    quotes_limit: { marginLeft: '10px', marginRight: '10px', fontSize: '20px' },
    card_title: { color: 'grey', fontSize: '15px' }
};