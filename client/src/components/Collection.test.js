const React = require('react');
const { rest } = require('msw');
const { setupServer } = require('msw/node')
const { render, fireEvent, screen } = require('@testing-library/react')
// require('@testing-library/jest-dom')
// const Fetch = require('./apiServices.js')


server = setupServer(
    rest.
        rest.get('/greeting', (req, res, ctx) => {
            return test(res.json({ greeting: 'hello there' }))
        })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close())

test('Collection renders Saved Playlist', async () => {
    server.use(
        rest.get('/greeting', (req, res, ctx) => {
            return res(res.status(500))
        })
    )
    //     render < Fetch url = '/greeting' />)
    // fireEvent.click(screen.XXXX('XXX'))

    // await screen.findByRole('ZZZZ')
    // expect(screen, getByRole('ZZZ').toHaveTextContent('some text'))
    // expect(screen.getByRole('button')).toHaveBeenCalledTimes()
})