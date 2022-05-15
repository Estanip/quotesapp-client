import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, ListGroupItem, Row, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../Hooks/UseTypedSelector';
import { IQuotesLIst, IState } from '../../interfaces';

import { getQuotes, getSlippages } from '../../redux/actions';
import './Cards.css';

export default function Cards() {

    const [quotesList, setQuotes] = useState(Array);

    const dispatch = useDispatch();

    const {average} = useTypedSelector((state) => state.quotes)
    const {quotes}:IState = useTypedSelector((state) => state.quotes)
    const {slippages}:IState = useTypedSelector((state) => state.quotes)

    useEffect(() => {
        dispatch(getQuotes())
    }, [dispatch]);

    useEffect(() => {
        if (quotes.length > 0 && average) getQuotesList()
    }, [quotes, average]);

    const getQuotesList = () => {

        dispatch(getSlippages())

        const result:Array<IQuotesLIst> = [];

        if (quotes.length > 0 && slippages.length > 0) {

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
    };

    return (
        <Container style={{ width: '60%' }}>
            <Row>
                {
                    quotesList.length > 0 ?
                        quotesList.map((e: any, i: number) => {
                            return (
                                <Col key={i}>
                                    <Card bg='secondary' style={{ width: '90%' }}>
                                        <Card.Body>
                                            <Card.Title style={styles.card_title}>{e.name.toUpperCase()}</Card.Title>
                                        </Card.Body>
                                        <ListGroup>
                                            <ListGroupItem>
                                                <div style={styles.list_title} >COMPRA</div>
                                                <div style={styles.list_body}>{e.buy_price ? e.buy_price : '-'}</div>
                                            </ListGroupItem>
                                            <ListGroupItem >
                                                <div style={styles.list_title} >DIFERENCIA % COMPRA</div>
                                                <div style={styles.list_body}>{e.buy_slippage ? e.buy_slippage : <Spinner size='sm' animation="border" variant="secondary" />} %</div>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <div style={styles.list_title} >VENTA</div>
                                                <div style={styles.list_body} >{e.sell_price ? e.sell_price : '-'}</div>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <div style={styles.list_title} >DIFERENCIA % VENTA</div>
                                                <div style={styles.list_body} >{typeof(e.sell_slippage) === 'number'  ? e.sell_slippage : <Spinner size='sm' animation="border" variant="secondary" />} %</div>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            )
                        })
                        :
                        <Container className='spinner'>
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

const styles = {
    card_title: { color: 'white', height: '10px' },
    list_title: { color: 'black', fontSize: '12px', backgroundColor: '#F4D03F', padding: '5px' },
    list_body:  { color: 'red ', fontSize: '20px' }
};