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

    const { quotes }: IState = useTypedSelector((state) => state.quotes)
    const { slippages }: IState = useTypedSelector((state) => state.quotes)

    useEffect(() => {
        dispatch(getQuotes())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (quotes.length > 0) getQuotesList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quotes]);

    const getQuotesList = () => {

        dispatch(getSlippages())

        const result: Array<IQuotesLIst> = [];

        if (quotes.length > 0 && slippages.length > 0) {

            // eslint-disable-next-line array-callback-return
            quotes.map((quote: any) => {
                // eslint-disable-next-line array-callback-return
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
        <Container>
            <Row id='card_row' >
                {
                    quotesList.length > 0 ?
                        quotesList.map((e: any, i: number) => {
                            return (
                                <Col key={i} >
                                    <Container>

                                        <Card id="quote_card" bg='warning' border="secondary">
                                            <Card.Body>
                                                <Card.Title className="text-muted" >{e.name.toUpperCase()}</Card.Title>
                                            </Card.Body>
                                            <ListGroup>
                                                <ListGroupItem id='list_item'>COMPRA</ListGroupItem>
                                                <ListGroupItem id='item_value'>{e.buy_price ? e.buy_price : '-'}</ListGroupItem>
                                                <ListGroupItem id='list_item'>DIFERENCIA % COMPRA</ListGroupItem>
                                                <ListGroupItem id='item_value'>{typeof (e.buy_slippage) === 'number' ? e.buy_slippage : <Spinner size='sm' animation="border" variant="secondary" />} %</ListGroupItem>
                                                <ListGroupItem id='list_item'>VENTA</ListGroupItem>
                                                <ListGroupItem id='item_value'>{e.sell_price ? e.sell_price : '-'}</ListGroupItem>
                                                <ListGroupItem id='list_item'>DIFERENCIA % VENTA</ListGroupItem>
                                                <ListGroupItem id='item_value'>{typeof (e.sell_slippage) === 'number' ? e.sell_slippage : <Spinner size='sm' animation="border" variant="secondary" />} %</ListGroupItem>
                                            </ListGroup>
                                        </Card>
                                    </Container>

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