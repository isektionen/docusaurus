import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
} from 'recharts';

const SWEDISH_DATA = [
  { name: 'Matematik', value: 13.5, color: '#f0d356' },
  { name: 'Programmering', value: 3, color: '#9d81e3' },
  { name: 'Fysik', value: 2.7, color: '#eab15c' },
  { name: 'Industriell Ekonomi', value: 19.5, color: '#8a6443' },
  { name: 'Teknikspår', value: 16.3, color: '#4f7fe0' },
  { name: 'Master', value: 30, color: '#2a11b7' },
  { name: 'Examensarbete', value: 15, color: '#c9c9c9' },
];

const ENGLISH_DATA = [
  { name: 'Mathematics', value: 13.5, color: '#f0d356' },
  { name: 'Programming', value: 3, color: '#9d81e3' },
  { name: 'Physics', value: 2.7, color: '#eab15c' },
  { name: 'Industrial Economics', value: 19.5, color: '#8a6443' },
  { name: 'Technical Track', value: 16.3, color: '#4f7fe0' },
  { name: 'Master', value: 30, color: '#2a11b7' },
  { name: 'Thesis', value: 15, color: '#c9c9c9' },
];

const LOCALE_COPY = {
  sv: {
    data: SWEDISH_DATA,
    ariaLabel: 'Översikt av kursomfång',
    ofTotalText: 'av helheten',
  },
  en: {
    data: ENGLISH_DATA,
    ariaLabel: 'Overview of course distribution',
    ofTotalText: 'of total',
  },
};

function ActiveShape(props) {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
    percent,
    ofTotalText,
  } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 6}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        fillOpacity={1}
        stroke={fill}
        strokeWidth={2}
      />
      <text
        x={cx}
        y={cy - 4}
        textAnchor="middle"
        fill="var(--ifm-font-color-base)"
        style={{ fontSize: '0.92rem', fontWeight: 600 }}
      >
        {payload.name}
      </text>
      <text
        x={cx}
        y={cy + 16}
        textAnchor="middle"
        fill="var(--ifm-color-emphasis-700)"
        style={{ fontSize: '0.86rem' }}
      >
        {`${value}% (${(percent * 100).toFixed(1)}% ${ofTotalText})`}
      </text>
    </g>
  );
}

function CustomTooltip({ active, payload }) {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  const { name, value } = payload[0].payload;

  return (
    <div
      style={{
        background: 'var(--ifm-background-surface-color)',
        border: '1px solid var(--ifm-color-emphasis-300)',
        borderRadius: 8,
        padding: '0.5rem 0.65rem',
        fontSize: '0.9rem',
      }}
    >
      <strong>{name}</strong>: {value}%
    </div>
  );
}

export default function ForSokandePieChart({ locale = 'sv' }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const copy = LOCALE_COPY[locale] || LOCALE_COPY.sv;
  const data = copy.data;
  const chartHeight = isMobile ? 520 : isTablet ? 620 : 700;
  const innerRadius = isMobile ? 62 : isTablet ? 96 : 110;
  const outerRadius = isMobile ? 98 : isTablet ? 148 : 172;

  const labelFormatter = ({ name, value }) => (isMobile ? `${name} ${value}%` : `${value}%`);
  const activeShapeRenderer = (props) => <ActiveShape {...props} ofTotalText={copy.ofTotalText} />;

  return (
    <div style={{ width: '100%', minHeight: chartHeight }} aria-label={copy.ariaLabel}>
      <ResponsiveContainer width="100%" height={chartHeight}>
        <PieChart
          margin={
            isMobile
              ? { top: 16, right: 72, left: 72, bottom: 58 }
              : isTablet
                ? { top: 20, right: 58, left: 58, bottom: 64 }
                : { top: 24, right: 72, left: 72, bottom: 72 }
          }
        >
          <Legend
            verticalAlign="top"
            align="center"
            iconType="circle"
            formatter={(value) => <span style={{ color: 'var(--ifm-font-color-base)' }}>{value}</span>}
          />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy={isMobile ? '57%' : '56%'}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={0}
            activeIndex={isMobile ? undefined : activeIndex}
            activeShape={isMobile ? undefined : activeShapeRenderer}
            onMouseEnter={isMobile ? undefined : (_, index) => setActiveIndex(index)}
            onMouseLeave={isMobile ? undefined : () => setActiveIndex(null)}
            label={labelFormatter}
            labelLine={false}
            isAnimationActive
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
