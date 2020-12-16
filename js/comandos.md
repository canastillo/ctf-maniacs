docker exec -i tareabackup_db_1 mysqldump -u root -p654321\
--default-character-set=utf8 --routines --skip-triggers\ --add-drop-table=false myfirstdb | gzip  > respaldo_utf8.sql.gz


docker exec -i tareabackup_db_1 mysql -u root -p654321 --default-character-set=utf8 myfirstdb --binary-mode -o < respaldo_utf8.sql 

docker exec -i tareabackup_db_1 mysqldump -u root -p654321 --default-character-set=utf8 --routines --skip-triggers --add-drop-table=false myfirstdb | gzip  > respaldo_utf8.sql.gz

docker exec -i tareabackup_db_1 mysql -u root -p654321 --default-character-set=utf8 myfirstdb --binary-mode -o < respaldo_utf8.sql.gzip





docker exec -i tareabackup_db_1 mariabackup --backup 
--target-dir=dbbackups --user=root --password=654321

docker cp tareabackup_db_1:/dbbackups dbbackups


docker exec -i tareabackup_db_1 mariabackup --backup --target-dir=inc --incremental-basedir=dbbackups --user=root --password=654321

docker exec -i tareabackup_db_1 mariabackup --backup --target-dir=inc2 --incremental-basedir=inc --user=root --password=654321


docker exec -i tareabackup_db_1 mariabackup --prepare --target-dir=dbbackups

docker exec -i tareabackup_db_1 mariabackup --prepare --target-dir=dbbackups --incremental-dir=inc

docker exec -i tareabackup_db_1 mariabackup --prepare --target-dir=dbbackups --incremental-dir=inc2




docker exec -it tareabackup_db_1 /bin/bash 

mariabackup --copy-back --target-dir=dbbackups