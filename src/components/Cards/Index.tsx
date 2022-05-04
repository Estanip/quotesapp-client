import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';


import { getQuotes, getSlippages } from '../../redux/actions';

export default function Cards() {

    const [quotesList, setQuotes] = useState([]);

    const dispatch = useDispatch();
    const { quotes } = useSelector((state: any) => state.reducer.quotes);
    const { slippages } = useSelector((state: any) => state.reducer.quotes);

    useEffect(() => {
        if (quotes.length === 0) dispatch(getQuotes())
        if (slippages.length === 0) dispatch(getSlippages())
    });

    useEffect(() => {
        if (quotes.length > 0 && slippages.length > 0) getQuotesList()
    }, [quotes]);

    const getQuotesList = () => {

        const result: any = [];

        quotes.map((quote: any) => {
            slippages.map((slipp: any) => {
                if (quote.name === slipp.name) {
                    result.push({
                        buy_price: quote.buy_price,
                        sell_price: quote.sell_price,
                        buy_slippage: slipp.buy_price_slippage,
                        sell_slippage: slipp.sell_price_slippage
                    })
                }
            })
        })

        setQuotes(result)
    }

    return (
        <Container>
            <Row>
                {
                    quotesList?.length > 0 ? quotesList.map((e: any, i: number) => {
                        return (
                            <Col key={i}>
                                <Card bg='warning' style={{ width: '100%' }}>
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
                                            <ListGroupItem style={{ backgroundColor: '#F7DC6F' }}>
                                                <div style={{ color: '#85929E', fontSize: '20px' }} >SLIPPAGE COMPRA</div>
                                                <div style={{ color: '#A9CCE3 ', fontSize: '20px' }}>{e.buy_slippage ? e.buy_slippage : '-'}</div>
                                            </ListGroupItem>
                                            <ListGroupItem style={{ backgroundColor: '#F7DC6F' }}>
                                                <div style={{ color: '#85929E', fontSize: '20px' }} >SLIPPAGE VENTA</div>
                                                <div style={{ color: '#A9CCE3 ', fontSize: '20px' }}>{e.sell_slippage ? e.sell_slippage : '-'}</div>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                        :
                        <div>
                            HOLA
                        </div>
                }
            </Row>
        </Container>

    );
}
