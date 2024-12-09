function* game() {
  let playerHealth = 100;
  let monsterHealth = 100;
  let potionCount = 3;

  console.log("Игра началась! Вы сражаетесь с монстром.");
  console.log(`Ваше здоровье: ${playerHealth}, Здоровье монстра: ${monsterHealth}`);

  while (playerHealth > 0 && monsterHealth > 0) {
    const action = yield `Ваше здоровье: ${playerHealth}, Здоровье монстра: ${monsterHealth}, Зелья: ${potionCount}`;

    switch (action) {
      case 'attack':
        const playerDamage = Math.floor(Math.random() * 20) + 5;
        const monsterDamage = Math.floor(Math.random() * 15) + 5;
        monsterHealth -= playerDamage;
        playerHealth -= monsterDamage;
        console.log(`Вы атаковали монстра и нанесли ${playerDamage} урона. Монстр атаковал вас и нанес ${monsterDamage} урона.`);
        break;

      case 'defend':
        const reducedDamage = Math.floor(Math.random() * 10);
        playerHealth -= reducedDamage;
        console.log(`Вы защитились! Монстр атаковал, но вы уменьшили урон до ${reducedDamage}.`);
        break;

      case 'potion':
        if (potionCount > 0) {
          const heal = Math.floor(Math.random() * 20) + 10;
          playerHealth += heal;
          potionCount--;
          console.log(`Вы использовали зелье и восстановили ${heal} здоровья.`);
        } else {
          console.log("У вас больше нет зелий!");
        }
        break;

      default:
        console.log("Неизвестное действие. Вы пропустили ход.");
        break;
    }

    if (monsterHealth <= 0) {
      console.log("Поздравляем! Вы победили монстра!");
      return "Победа!";
    }

    if (playerHealth <= 0) {
      console.log("Вы были побеждены монстром...");
      return "Поражение...";
    }
  }
}

const gameInstance = game();

console.log(gameInstance.next().value); // Начальная информация о здоровье
console.log(gameInstance.next('attack').value); // Выбрана атака
console.log(gameInstance.next('defend').value); // Выбранная защита
console.log(gameInstance.next('potion').value); // Использование зелья
console.log(gameInstance.next('attack').value); // Продолжение атаки или завершение игры