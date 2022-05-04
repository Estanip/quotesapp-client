import React, { useEffect } from 'react';
import { Card, Container, ListGroup, Navbar, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { getAverage } from '../../redux/actions';

export default function Header() {
    const dispatch = useDispatch();
    const { average_buy_price, average_sell_price } = useSelector((state: any) => state.reducer.quotes.average);

    useEffect(() => {
        if (!average_buy_price) dispatch(getAverage())
    });


    return (
        <Navbar expand="sm" variant="dark" bg="dark" style={{ marginBottom: '30px' }}>
            <Container>
                <Navbar.Brand>ENCONTRA LA MEJOR COTIZACION</Navbar.Brand>
                <Navbar.Brand>
                    <div>
                        <Card style={{ padding: '10px' }}>
                            <Card.Title style={{ color: 'red', fontSize: '15px' }}>Cotizacion Promedio</Card.Title>
                            <ListGroup style={{ display: 'flex', flexDirection: 'row', height: '40px' }}>
                                <ListGroup.Item style={{ height: '100%', fontSize: '12px', marginRight: '5px' }}>Compra: {average_buy_price ? average_buy_price : <Spinner size='sm' animation="border" variant="primary" />}</ListGroup.Item>
                                <ListGroup.Item style={{ height: '100%', fontSize: '12px', marginLeft: '5px'}} >Venta: {average_sell_price}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}
