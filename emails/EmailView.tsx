import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components'

const EmailView = (props: {
    name: string
}) => {
    return (
        <>
            <Html>
                <Preview>Preview</Preview>
                <Tailwind>
                    <Body
                        // style={body}
                        className='text-center font-bold text-3xl'
                    >
                        <Container>
                            <Text>Hello, {props.name}!</Text>
                            <Link href="https://react-email.dev">React Email</Link>
                        </Container>
                    </Body>
                </Tailwind>
            </Html>
        </>
    )
}

const body: CSSProperties = {
    fontSize: '16px',
    padding: '20px 0',
    textAlign: 'center',
    fontFamily: 'Helvetica, Arial, sans-serif',
}

export default EmailView; 