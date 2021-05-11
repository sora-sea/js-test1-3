'use strict';

{
  const title = ["==============================","現在持っているタスクの一覧","=============================="];
  const task = ["掃除","買い物","散歩"];

  for (let i = 0; i < title.length; i++) {
    console.log(`${title[i]} `);
  }
  for (let i = 0; i < task.length; i++) {
    console.log(`${i} : ${task[i]} `);
  }

  let newTask = prompt("タスクを入力してください");
  
  task.push(newTask);

  alert("新しいタスクを追加しました。");

  for (let i = 0; i < title.length; i++) {
    console.log(`${title[i]} `);
  }
  for (let i = 0; i < task.length; i++) {
    console.log(`${i} : ${task[i]} `);
  }

  prompt("「確認,追加,削除,終了」のいずれかを入力してください");
}