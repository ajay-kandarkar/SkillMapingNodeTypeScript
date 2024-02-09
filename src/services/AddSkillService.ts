import pool from '../Config/dbconnection';
import { Skill } from '../Models/AddSkillModel';

export const addSkill = async (skill: Skill): Promise<void | string> => {
  try {
    await pool.query(
      'INSERT INTO skill (name, description) VALUES (?, ?)',
      [skill.name, skill.description]
    );
  } catch (error : any) {
    if (error.code === 'ER_DUP_ENTRY') {
      return 'Skill with the same name already exists.';
    }
    throw error;
  }
};

