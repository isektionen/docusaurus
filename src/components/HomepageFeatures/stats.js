import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { createClient } from '@supabase/supabase-js';
import { useColorMode } from '@docusaurus/theme-common';

const stats = [
  { label: "Antal medlemmar", value: "500+" },
  { label: "Issy öl (sedan 2017)", value: "74891" },
  { label: "Antal IT-grupper", value: "1" },
];

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(url, key);

async function fetchBeerCount() {
    const { data, error } = await supabase
    .from('beers')
    .select('count')
    .order('date', { ascending: false })
    .limit(1)
    .single();

    if (error) {
        console.error('Error fetching beer count:', error);
        return null;
    }

    return data ? data.count : 75000;
}

function Stat({ value, label }) {
const { colorMode } = useColorMode();
const textColor = colorMode === 'dark' ? '#ffffff' : '#7D5A3C';
const textColor2 = colorMode === 'dark' ? '#ffffff' : '#6c757d';  

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: textColor }}>
          {value !== null ? value : 'Laddar...'}
        </h2>
        <p style={{ fontSize: "1.5rem", color: textColor2 }}>{label}</p> 
      </div>
    </div>
  );
}

export default function Stats() {

const [beerCount, setBeerCount] = useState(null);

  useEffect(() => {
    async function getBeerCount() {
      const count = await fetchBeerCount();
      console.log('Beer count:', count);
      setBeerCount(count);
    }

    getBeerCount();
  }, []);


  const updatedStats = stats.map((stat) =>
    stat.label === 'Issy öl (sedan 2017)' ? { ...stat, value: beerCount } : stat
  );
    
  return (
    <div className="container my-4">
      <div className="row">
        {updatedStats.map((stat, idx) => (
          <Stat key={idx} {...stat} />
        ))}
      </div>
    </div>
  );
}
