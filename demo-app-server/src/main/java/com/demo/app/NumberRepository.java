package com.demo.app;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface NumberRepository extends CrudRepository<Number, Integer> {

	@Transactional
	@Modifying
	@Query("DELETE FROM Number t WHERE t.num=:#{#n.num}")
	void deleteNum(@Param("n") Number n);
	
	@Query("SELECT count(*) > 0 from Number t where t.num=:#{#n.num}")
	boolean existsNum(@Param("n") Number n);

}