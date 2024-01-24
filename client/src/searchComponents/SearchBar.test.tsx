import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar.tsx';
import { userEvent } from '@testing-library/user-event';

describe('SearchBar Component', () => {
    it('search form saves the query in the setSearch variable', async () => {
        const mockSearch = "50 cents";
        const setSearch = vi.fn();
        const handleSearch = vi.fn();
        const search = ''


        render(<SearchBar search={mockSearch} setSearch={setSearch} handleSearch={handleSearch} />)

        const searchForm = screen.getByRole('searchbox')
        const button = screen.getByRole('button')

        userEvent.type(searchForm, mockSearch)
        userEvent.type(searchForm, '{enter}')

        await expect(handleSearch).toHaveBeenCalled();

    })
})