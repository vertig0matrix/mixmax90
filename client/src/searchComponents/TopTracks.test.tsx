import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TopTracks from './TopTracks.tsx';
import { res_obj } from '../Tests/MockObject.ts';



describe('TopTracks Component', () => {
  test('renders a list of tracks', async () => {
    const handleClick = vi.fn();
    const setTopTracks = vi.fn();
    const handleRelatedArtistData = vi.fn()
    const setSearchResult = vi.fn();
    const setShowTopTracks = vi.fn();
    const MockObject = res_obj

    render(<TopTracks showTopTracks={true}
      onClick={handleClick}
      setTopTracks={setTopTracks}
      handleRelatedArtistData={handleRelatedArtistData}
      setSearchResult={setSearchResult}
      setShowTopTracks={setShowTopTracks}
      topTracks={MockObject} />)

    const click = screen.getByRole('button');
    fireEvent.click(click);

    const trackItems = await screen.findAllByRole('listitem');
    expect(trackItems).toHaveLength(31);

  })
})