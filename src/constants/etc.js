import { Paragraph } from '../components/atoms';

export const phonePattern = /\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})/;
export const phoneMask = '(111) 111-1111';

export const postalPattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
export const postalMask = '*** ***';

export const defFormLayout = {
  layout: 'horizontal',
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};
export const sortDirectionKeys = {
  ascend: 'ASC',
  descend: 'DESC',
};

export const projectStatusColors = {
  Active: '#61DC00',
  'Hot/Last Chance': '#E79F33',
  'Hot List': '#E79F33',
  'Coming Soon': '#EBC231',
};

export const defText = (text, align, isPrice, extraProps = {}, emptyValue) => {
  let rowContent = '';
  if (!text) {
    rowContent = emptyValue ? '' : '-';
  } else {
    rowContent = text;
    if (isPrice) {
      rowContent = isPrice?.onlyLocale
        ? Number(text).toLocaleString()
        : Number(text).toLocaleString(undefined, { minimumFractionDigits: 2 });
    }
  }

  return (
    <Paragraph
      mb={0}
      align={align || 'left'}
      fw={350}
      {...extraProps}
      // text_overflow='ellipsis'
    >
      {rowContent}
    </Paragraph>
  );
};
