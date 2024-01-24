import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar.tsx';

describe('SearchBar Component', () => {
    it('search form saves the query in the setSearch variable', () => {
        const mockSearch = "50 cents";
        const setSearch = vi.fn();
        const handleSearch = vi.fn();

        render(<SearchBar search={mockSearch} setSearch={setSearch} handleSearch={handleSearch} />)

        const test = screen.getByRole('searchbox').nodeValue = mockSearch;
        console.log(test)
        expect(test).toBe(mockSearch);
    })
})