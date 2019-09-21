import { Inject, Injectable } from '@nestjs/common';
import { KNEX_CONNECTION } from '@nestjsplus/knex';
import { MASSIVE_CONNECTION } from '@nestjsplus/massive';

@Injectable()
export class AppService {
  constructor(
    @Inject(KNEX_CONNECTION) private readonly knex,
    @Inject(MASSIVE_CONNECTION) private readonly massive,
  ) {}

  async getCats() {
    return await this.knex('cats')
      .select('*')
      .from('cats');
  }

  async getCatsPeople() {
    return await this.knex
      .select(
        'cats.name as cat',
        'cats.age',
        'cats.breed',
        'people.name as person',
      )
      .from('cats_people')
      .innerJoin('cats', 'cats_people.cat_id', 'cats.id')
      .innerJoin('people', 'cats_people.people_id', 'people.id');
  }

  async create(cat) {
    return await this.knex('cats').insert(cat);
  }

  // Only the create function below uses MassiveJS because it conveniently lets us
  // execute a file as a DB function
  //
  // The rest of the examples above use Knex
  //
  // create() is automatically registered as a function (just like a stored
  // db function), but it's just a text file in /dbscripts.  Since it's in the
  // schema subfolder, this acts like a schema/namespace, so it's referenced
  // as db.schema.create()
  async createDb() {
    console.log('creating cats database');
    await this.massive.schema.create();
    return { status: 'OK' };
  }
}
