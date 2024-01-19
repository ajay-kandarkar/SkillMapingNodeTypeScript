import { RowDataPacket } from 'mysql2';
interface StoredUser extends RowDataPacket {
  password: string; 
}
export default StoredUser;