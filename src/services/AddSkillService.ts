import pool from '../Config/dbconnection';
import { Skill } from '../Models/AddSkillModel';
export const addSkill = async (skill: Skill): Promise<void | null> => {
  try {
     await pool.query(
      'INSERT INTO skill (name,description) VALUES (?, ?)',
      [skill.name,skill.description]
    );
  } catch (error) {
    return null;
  }
}
