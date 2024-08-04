import React from 'react'
import { Html, Body, Container, Text, Link, Preview } from '@react-email/components'

const EmailView = () => {
    return (
        <>
            <Html>
                <Preview>Preview</Preview>
                <Body>
                    <Container>
                        <Text>Hello, World!</Text>
                        <Link href="https://react-email.dev">React Email</Link>
                    </Container>
                </Body>
            </Html>
        </>
    )
}

export default EmailView
