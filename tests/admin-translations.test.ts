import test from 'node:test';
import assert from 'node:assert/strict';
import {translateAdmin} from '../src/lib/cms/admin-translations';
test('admin language translates interface and nested version labels',()=>{
 assert.equal(translateAdmin('Etapa actualizada.','en'),'Stage updated.');
 assert.equal(translateAdmin('Borrador 3 · Publicación 2','en'),'Draft 3 · Publication 2');
 assert.equal(translateAdmin('Iniciativa 1 · descripción','en'),'Initiative 1 · description');
 assert.equal(translateAdmin('  Etapa actualizada. ','en'),'  Stage updated. ');
});
test('Spanish and unknown user content remain unchanged',()=>{
 assert.equal(translateAdmin('Etapa actualizada.','es'),'Etapa actualizada.');
 assert.equal(translateAdmin('Alianza con Bosque 2026','en'),'Alianza con Bosque 2026');
});
