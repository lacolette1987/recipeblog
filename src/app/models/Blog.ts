import { FieldValue, Timestamp } from '@firebase/firestore';
import { Ingredient } from '../components/blog-form';

export default interface Blog {
  readonly uid: string;
  readonly userId: string;
  imgUrl: string;
  timestamp: FieldValue | Timestamp;
  title: string;
  author: string;
  lead: string;
  category: string;
  level: string;
  tags: string[];
  duration: string;
  description: string;
  quantity: string;
  ingredients: Ingredient[];
  avgRating?: number;
}
