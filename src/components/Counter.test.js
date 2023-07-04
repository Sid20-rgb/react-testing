import { render, screen } from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { logRoles } from '@testing-library/react';

describe('Counter', () => {
    test('should render correctly', () => {
        render(<Counter/>);
        const h1Elem = screen.getByRole('heading',{
            level:1,
        }); 
        const increaseBtn = screen.getByRole('button',{
            name: "Increase",
        });
        expect(h1Elem).toBeInTheDocument();
        expect(increaseBtn).toBeInTheDocument();
    });
    test('should increase count with button click', async () => {
        render(<Counter/>);
        const increaseBtn = screen.getByRole('button', {
            name: "Increase",
        });
        await act(() => userEvent.click(increaseBtn));
        const h1Elem = screen.getByRole('heading', {
            level: 1,
        });
        expect(h1Elem).toHaveTextContent(1);
    });
    test('should set the initial value from input field', async () => {
        render(<Counter />);
        const inputElem = screen.getByRole('spinbutton');
        await act(() => userEvent.type(inputElem, '15'));
        const setBtn = screen.getByRole('button', {
          name: 'Set',
        });
        await act(() => userEvent.click(setBtn));
      
        const increaseBtn = screen.getByRole('button', {
          name: 'Increase',
        });
      
        const h1Elem = screen.getByRole('heading', {
          level: 1,
        });
      
        // Verify initial value is set correctly
        expect(h1Elem).toHaveTextContent('15');
      
        // Increase the count by clicking the button
        await act(() => userEvent.click(increaseBtn));
      
        // Verify the count has been incremented to 16
        expect(h1Elem).toHaveTextContent('16');
      
        // Increase the count again
        await act(() => userEvent.click(increaseBtn));
      
        // Verify the count has been incremented to 17
        expect(h1Elem).toHaveTextContent('17');
      });
      

    test('should have proper order of focus', () => {
        render(<Counter/>);
        const increaseBtn = screen.getByRole('button', {
            name: "Increase",
        })
        const inputElem = screen.getByRole('spinbutton');
        const setBtn = screen.getByRole('button', {
            name: "Set"
        });

        userEvent.tab()
        expect(increaseBtn).toHaveFocus();
        userEvent.tab()
        expect(inputElem).toHaveFocus();
        userEvent.tab()
        expect(setBtn).toHaveFocus();
        
        
    })
});
