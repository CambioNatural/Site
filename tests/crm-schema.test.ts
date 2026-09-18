import test from 'node:test';
import assert from 'node:assert/strict';
import {crmSchemas,emptyCrm,crmKinds} from '../src/lib/cms/crm';
test('CRM accepts both processes and rejects invalid amounts, dates and relations',()=>{
 for(const kind of crmKinds)assert.ok(crmSchemas[kind].safeParse({...emptyCrm(kind),name:'Prueba'}).success);
 const deal={...emptyCrm('deals'),name:'Alianza',process:'partnership'};
 assert.ok(crmSchemas.deals.safeParse(deal).success);
 for(const patch of [{amount:-1},{amount:1.001},{close_date:'2026-02-30'},{contact_id:'invalid'},{stage:'unknown'}])assert.equal(crmSchemas.deals.safeParse({...deal,...patch}).success,false);
 assert.equal(crmSchemas.companies.safeParse({...emptyCrm('companies'),name:'Test',website:'javascript:alert(1)'}).success,false);
});
