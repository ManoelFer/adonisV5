import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'eMail'

    await User.updateOrCreateMany(uniqueKey, [
      {
        eMail: 'virk@adonisjs.com',
        password: 'virksenha',
      },
      {
        eMail: 'romain@adonisjs.com',
        password: 'romainsenha',
      },
      {
        eMail: 'manoel@adonisjs.com',
        password: 'senhamanoel',
      },
    ])
  }
}
