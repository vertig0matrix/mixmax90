import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TopTracks from './TopTracks.tsx';
import { Track } from "../Interfaces/track.interface.ts";
import { object } from '../Tests/MockObject.ts';

describe('TopTracks Component', () => {
  const mockTracks: Track[] = new Array(31).fill({
    album: {
      images: [{}, {}, { url: 'http://example.com/image.jpg' }]
    },
    artists: [{ name: 'Artist Name' }],
    name: 'Track Name',
  });

  // test('renders the correct number of tracks', () => {
  //   render(<TopTracks showTopTracks={true} topTracks={mockTracks} />);
  //   const trackItems = screen.getAllByTestId('track-item');
  //   expect(trackItems).toHaveLength(31);
  // });

  test('does not render when showTopTracks is false', () => {
    render(<TopTracks showTopTracks={false} topTracks={mockTracks} />);
    expect(screen.queryByTestId('top-tracks-ul')).not.toBeInTheDocument();
  });



});
