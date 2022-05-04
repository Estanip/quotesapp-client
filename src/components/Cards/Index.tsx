import React, { useEffect } from 'react';
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';


import { getQuotes, getSlippages } from '../../redux/actions';

export default function Cards() {
    const dispatch = useDispatch();
    const { quotes } = useSelector((state: any) => state.reducer.quotes);
    const { slippages } = useSelector((state: any) => state.reducer.quotes);

    console.log(slippages)

    useEffect(() => {
        if (quotes.length === 0) dispatch(getQuotes())
        if (slippages.length === 0) dispatch(getSlippages())
    });

    return (
        <Container>
            <Row>
                {
                    quotes.map((e: any, i: number) => {
                        return (
                            <Col key={i}>
                                <Card  bg='warning' style={{ width: '100%' }}>
                                    <Card.Body>
                                        <Card.Title style={{ color: '#85929E', marginBottom: '15px' }}>Cotizacion {e.name}</Card.Title>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem style={{ backgroundColor: '#F7DC6F' }}>
                                                <div style={{ color: '#85929E', fontSize: '20px' }} >COMPRA</div>
                                                <div style={{ color: '#A9CCE3 ', fontSize: '20px' }}>{e.buy_price ? e.buy_price : '-'}</div>
                                            </ListGroupItem>
                                            <ListGroupItem style={{ backgroundColor: '#F7DC6F' }}>
                                                <div style={{ color: '#85929E', fontSize: '20px' }} >VENTA</div>
                                                <div style={{ color: '#A9CCE3 ', fontSize: '20px' }}>{e.sell_price ? e.sell_price : '-'}</div>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>

    );
}
