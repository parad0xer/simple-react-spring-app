FROM openjdk:8-jdk-alpine as build

WORKDIR /demo-app-server

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

RUN ./mvnw clean package -DskipTests

###########################################################################################
FROM openjdk:8-jre-alpine


WORKDIR /demo-app-server
COPY --from=build /demo-app-server/target/app-0.0.1-SNAPSHOT.jar .
EXPOSE 8080
ENTRYPOINT ["java","-jar","app-0.0.1-SNAPSHOT.jar"]