type ReceiptLineItem = {
  description: string;
  price: number;
  quantity?: number;
  amount?: number;
};

type ReceiptLineItems = ReceiptLineItem[];

type Column = {
  id: string;
  label?: string;
  width?: string;
};

type Columns = Column[];

interface BaseReceiptData {
  heading: string;
  lineItems: ReceiptLineItems;
  tax?: number;
}
