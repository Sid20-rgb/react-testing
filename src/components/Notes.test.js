import { render, screen } from '@testing-library/react';
import Notes from './Notes';
import { server } from '../mocks/server.js'
import { rest } from 'msw'
import userEvent from '@testing-library/user-event';


describe('Notes', () => {
    test('should render correctly', async() => {
        render(<Notes />);
        const h1Elem = screen.getByRole('heading',{
            level:1,
        }); 
        expect(h1Elem).toBeInTheDocument();

        const listElem = screen.getByRole('list');
        expect(listElem).toBeInTheDocument()
        const itemElem = await screen.findAllByRole('listitem');
        expect(itemElem).toHaveLength(2)
    })

    // test('should render error message', async() => {
    //     render(<Notes />);
    //     const h1Elem = screen.getByRole('heading',{
    //         level:1,
    //     }); 
    //     expect(h1Elem).toBeInTheDocument();

    //     const listElem = screen.getByRole('list');
    //     expect(listElem).toBeInTheDocument()
    //     const itemElem = await screen.findAllByRole('listitem');
    //     expect(itemElem).toHaveLength(2)
    // })

    test('should render error message', async () => {
        server.use(
            rest.get('https://jsonplaceholder.typicode.com/todos',
            (req, res, ctx) => {
                return res(ctx.status(500))
            }))

        render(<Notes />);

        const errElem = await screen.findByText('Error fetching data');
        expect(errElem).toBeInTheDocument();
    })

    test('should call the delete function', async () => {
        const  mockFn = jest.fn();
        render(<Notes handleDelete={mockFn} />);

        const deleteBtnElem = await screen.findAllByRole('button', {

            name: 'Delete',
        });

        userEvent.click(deleteBtnElem[0]);

        expect(mockFn).toHaveBeenCalledTimes(1);

        
    })
    
})