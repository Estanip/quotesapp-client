import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, ListGroupItem, Row, Spinner } from 'react-bootstrap';
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
                        name: quote.name,
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
        <Container style={{ width: '60%' }}>
            <Row>
                {
                    quotes.length > 0 ?
                        quotesList.map((e: any, i: number) => {
                            return (
                                <Col key={i}>
                                    <Card bg='secondary' style={{ width: '90%' }}>
                                        <Card.Body>
                                            <Card.Title style={{ color: 'white', height: '10px' }}>{e.name.toUpperCase()}</Card.Title>
                                        </Card.Body>
                                        <ListGroup>
                                            <ListGroupItem>
                                                <div style={{ color: 'black', fontSize: '12px', backgroundColor: '#F4D03F', padding: '5px' }} >COMPRA</div>
                                                <div style={{ color: 'red ', fontSize: '20px' }}>{e.buy_price ? e.buy_price : '-'}</div>
                                            </ListGroupItem>
                                            <ListGroupItem >
                                                <div style={{ color: 'black', fontSize: '12px', backgroundColor: '#F4D03F', padding: '5px' }} >DIFERENCIA % COMPRA</div>
                                                <div style={{ color: 'red ', fontSize: '20px' }}>{e.buy_slippage > 0 ? e.buy_slippage : 0} %</div>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <div style={{ color: 'black', fontSize: '12px', backgroundColor: '#F4D03F', padding: '5px' }} >VENTA</div>
                                                <div style={{ color: 'red ', fontSize: '20px' }}>{e.sell_price ? e.sell_price : '-'}</div>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <div style={{ color: 'black', fontSize: '12px', backgroundColor: '#F4D03F', padding: '5px' }} >DIFERENCIA % VENTA</div>
                                                <div style={{ color: 'red ', fontSize: '20px' }}>{e.sell_slippage > 0 ? e.sell_slippage : 0} %</div>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            )
                        })
                        : 
                        <Container style={{ marginTop: '100px', display: 'grid', gridAutoFlow: 'column', gridAutoColumns: '70px', justifyContent: 'center'  }}>
                            <Spinner animation="grow" variant="warning" />
                            <Spinner animation="grow" variant="warning" />
                            <Spinner animation="grow" variant="warning" />
                            <Spinner animation="grow" variant="warning" />
                            <Spinner animation="grow" variant="warning" />
                        </Container>
                }
            </Row>
        </Container>

    );
}
