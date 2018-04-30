export const ADD_GOAL = `ADD_GOAL`;
export const REMOVE_GOAL = `REMOVE_GOAL`;
export const EDIT_GOAL = `EDIT_GOAL`;
import { clone } from "ramda";

const initialGoals = {
  entities: []
};

export default function(goals = initialGoals, { type, data }) {
  let entities, entity;

  switch (type) {
    case ADD_GOAL:
      return { ...goals, entities: [...goals.entities, data] };

    case REMOVE_GOAL:
      entities = goals.entities.filter(el.id !== data);
      return { ...goals, entities };

    case EDIT_GOAL:
      entities = clone(goals.entities);
      entity = goals.entities.find(el => el.id === data.id);
      entity = { ...entity, ...data };
      return { ...goals, entities };
  }

  return goals;
}

export const addGoal = data => ({ type: ADD_GOAL, data });
export const removeGoal = data => ({ type: REMOVE_GOAL, data });
export const editGoal = data => ({ type: EDIT_GOAL, data });
