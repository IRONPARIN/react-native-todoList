import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { project } from './config';
import * as scene from './scenes'

export const Scenes = [
  { key: 'AddTodo', component: 'AddTodoScene', title: 'Add Todo', options: {} },
]

const renderScenes = (sceneArr = [], module) => {
  return sceneArr.map((value, index) => {
    return(<Scene key={value.key} component={module[value.component]} title={value.title}/>)
  })
}

console.log(scene)

const Routes = () => {
  return (
    <Router sceneStyle={{ marginTop: 70 }}>
      <Scene key="TodoList" component={scene.TodoListScene} title="Todo List" initial />
      {renderScenes(Scenes, scene)}
    </Router>
  )
}

export default Routes
