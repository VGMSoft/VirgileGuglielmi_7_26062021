#Show posts more recent first
SELECT user_id, post_content, post_date
FROM Posts
ORDER BY post_date DESC
LIMIT 10 OFFSET 0;

#Search for older post //TODO
CREATE FULLTEXT INDEX ind_full_pseudo
ON Posts (pseudo);

CREATE FULLTEXT INDEX ind_full_post_content
ON Posts (post_content);

CREATE FULLTEXT INDEX ind_full_pseudo_post_content
ON Posts (titre, auteur);

SELECT pseudo, post_content
FROM Posts
WHERE MATCH(pseudo, post_content)
AGAINST('Catis' IN BOOLEAN MODE);