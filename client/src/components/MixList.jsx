import React from 'react'
import MixListItem from './MixListItem';

const MixList = () => {
  return (
    <>
      <div>MixList</div>
      <button>
        🔄
        <br />
        New
      </button>
      <button>
        🔀
        <br />
        Shuffle
      </button>
      <button>
        ➕
        <br />
        Save
      </button>
      <button>
        ✖️
        <br />
        Clear
      </button>
      <p>Press for preview</p>
      <MixListItem />
    </>
  );
}

export default MixList