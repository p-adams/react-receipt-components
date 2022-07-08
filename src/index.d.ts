type LineItem = {
  name: string;
  price: number;
} & {
  // support custom line item columns
  [key: string]: any;
};

type LineItems = LineItem[];

type Column = {
  id: string;
  label?: string;
  width?: string;
};

type Columns = Column[];
